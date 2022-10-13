/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
	RichText,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect, withSelect } from '@wordpress/data';
import { useEffect, useState, useRef } from '@wordpress/element';
import {
	ToolbarDropdownMenu,
	ToolbarGroup,
	ToolbarButton,
	ResizableBox,
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { Icon, search } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';
import fetchLinkSuggestions from './fetchLinkSuggestions';
import {
	store as interfaceStore,
} from '@wordpress/interface';
import { store as editPostStore } from '@wordpress/edit-post';

/**
 * Internal dependencies
 */
import {
	buttonOnly,
	buttonOutside,
	buttonInside,
	noButton,
	buttonWithIcon,
	toggleLabel,
} from './icons';
import Modal from './Modal';
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border"
import SpacingComponent from '../../components/premium-responsive-spacing';
import PremiumTypo from "../../components/premium-typo"
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import WebfontLoader from "../../components/typography/fontLoader";
import { generateBlockId, generateCss, typographyCss, paddingCss, borderCss } from '../../components/HelperFunction';

const MIN_WIDTH = 220;

function SearchEdit({
	className,
	attributes,
	setAttributes,
	toggleSelection,
	isSelected,
	clientId,
	deviceType
}) {
	const {
		label,
		showLabel,
		placeholder,
		align,
		buttonText,
		buttonPosition,
		buttonUseIcon,
		formStyle,
		colors,
		position,
		border,
		spacing,
		typography,
		buttonTypography,
		floatPosition,
		floatValues,
		ajaxSearch,
		blockId,
		hideDesktop,
		hideTablet,
		hideMobile,
	} = attributes;

	const ref = useRef();
	let loadFonts;
	let loadButtonFonts;

	if (typography?.fontFamily !== 'Default') {
		const fontConfig = {
			google: {
				families: [typography.fontFamily]
			}
		}
		loadFonts = (
			<WebfontLoader config={fontConfig}>
			</WebfontLoader>
		)
	}

	if (buttonTypography?.fontFamily !== 'Default') {
		const fontButtonConfig = {
			google: {
				families: [buttonTypography.fontFamily]
			}
		}
		loadButtonFonts = (
			<WebfontLoader config={fontButtonConfig}>
			</WebfontLoader>
		)
	}

	const [isVisibility, setIsVisibility] = useState(false);
	const [posts, setPosts] = useState([]);

	const insertedInNavigationBlock = useSelect(
		(select) => {
			const { getBlockParentsByBlockName, wasBlockJustInserted } = select(
				blockEditorStore
			);
			return (
				!!getBlockParentsByBlockName(clientId, 'core/navigation')
					?.length && wasBlockJustInserted(clientId)
			);
		},
		[clientId]
	);

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch(
		blockEditorStore
	);
	useEffect(() => {
		if (!insertedInNavigationBlock) return;
		// This side-effect should not create an undo level.
		__unstableMarkNextChangeAsNotPersistent();
		setAttributes({
			showLabel: false,
			buttonUseIcon: true,
			buttonPosition: 'button-inside',
		});
	}, [insertedInNavigationBlock]);

	useEffect(() => {
		setAttributes({ blockId: "premium-search-" + generateBlockId(clientId) });
	})

	const isButtonPositionInside = 'button-inside' === buttonPosition;
	const isButtonPositionOutside = 'button-outside' === buttonPosition;
	const hasNoButton = 'no-button' === buttonPosition;
	const hasOnlyButton = 'button-only' === buttonPosition;

	let padding = spacing.padding ? spacing.padding : {};
	let buttonPadding = spacing.buttonPadding ? spacing.buttonPadding : {};

	const getBlockClassNames = () => {
		return classnames(
			className,
			blockId,
			formStyle === 'button' ? 'wp-block-premium-search-button-style' : undefined,
			isButtonPositionInside
				? 'wp-block-premium-search__button-inside'
				: undefined,
			isButtonPositionOutside
				? 'wp-block-premium-search__button-outside'
				: undefined,
			hasNoButton ? 'wp-block-premium-search__no-button' : undefined,
			hasOnlyButton ? 'wp-block-premium-search__button-only' : undefined,
			!buttonUseIcon && !hasNoButton
				? 'wp-block-premium-search__text-button'
				: undefined,
			buttonUseIcon && !hasNoButton
				? 'wp-block-premium-search__icon-button'
				: undefined,
			hideDesktop ? 'premium-desktop-hidden' : undefined,
			hideTablet ? 'premium-tablet-hidden' : undefined,
			hideMobile ? 'premium-mobile-hidden' : undefined,
		);
	};

	const buttonPositionControls = [
		{
			role: 'menuitemradio',
			title: __('Button outside', 'premium-blocks-for-gutenberg'),
			isActive: buttonPosition === 'button-outside',
			icon: buttonOutside,
			onClick: () => {
				setAttributes({
					buttonPosition: 'button-outside',
				});
			},
		},
		{
			role: 'menuitemradio',
			title: __('Button inside', 'premium-blocks-for-gutenberg'),
			isActive: buttonPosition === 'button-inside',
			icon: buttonInside,
			onClick: () => {
				setAttributes({
					buttonPosition: 'button-inside',
				});
			},
		},
		{
			role: 'menuitemradio',
			title: __('No button', 'premium-blocks-for-gutenberg'),
			isActive: buttonPosition === 'no-button',
			icon: noButton,
			onClick: () => {
				setAttributes({
					buttonPosition: 'no-button',
				});
			},
		},
	];

	const getButtonPositionIcon = () => {
		switch (buttonPosition) {
			case 'button-inside':
				return buttonInside;
			case 'button-outside':
				return buttonOutside;
			case 'no-button':
				return noButton;
			case 'button-only':
				return buttonOnly;
		}
	};

	const getResizableSides = () => {
		return {
			top: false,
			right: false,
			bottom: false,
			left: false,
			topRight: false,
			bottomRight: false,
			bottomLeft: false,
			topLeft: false,
		};
	};

	const setColor = (color, value) => {
		const newColors = { ...colors };
		newColors[color] = value;
		setAttributes({ colors: newColors });
	}

	const onChangeSpacing = (value) => {
		const newSpacing = { ...spacing, ...value };
		setAttributes({ spacing: newSpacing });
	}

	const onChangePositionSide = (value) => {
		const newFloatValues = { ...floatValues };
		setAttributes({ floatValues: { ...newFloatValues, ...value } });
	}

	const getPostsByName = async (name) => {
		const data = await fetchLinkSuggestions(name, { type: 'post', perPage: 6 });
		if (data.length) {
			setPosts(data);
		}
	}

	const inputChangeHandler = (e) => {
		if (!ajaxSearch) {
			return;
		}
		const value = e.target.value;
		getPostsByName(value);
	};

	const textFieldStyles = {
		color: colors.text,
		backgroundColor: colors.background,
		...paddingCss(padding, deviceType),
		...borderCss(border, deviceType),
	};

	const textTypoStyles = {
		...typographyCss(typography, deviceType)
	};

	const renderTextField = () => {
		// If the input is inside the wrapper, the wrapper gets the border color styles/classes, not the input control.
		const textFieldClasses = classnames(
			'wp-block-premium-search__input',
			isButtonPositionInside ? undefined : ''
		);
		const styles = isButtonPositionInside ? { ...textTypoStyles, backgroundColor: 'transparent' } : { ...textFieldStyles, ...textTypoStyles };
		return (
			<input
				type="search"
				className={textFieldClasses}
				style={styles}
				aria-label={__('Optional placeholder text', 'premium-blocks-for-gutenberg')}
				// We hide the placeholder field's placeholder when there is a value. This
				// stops screen readers from reading the placeholder field's placeholder
				// which is confusing.
				placeholder={
					placeholder ? undefined : __('Optional placeholder…', 'premium-blocks-for-gutenberg')
				}
				value={placeholder}
				onChange={(event) => {
					inputChangeHandler(event);
					setAttributes({ placeholder: event.target.value })
				}
				}
			/>
		);
	};

	const renderButton = () => {
		// If the button is inside the wrapper, the wrapper gets the border color styles/classes, not the button.
		const buttonClasses = classnames(
			'wp-block-premium-search__button wp-block-button__link',
			isButtonPositionInside ? undefined : '',
			buttonUseIcon ? 'has-icon' : undefined
		);
		const butttonStyles = {
			color: colors.btnText,
			backgroundColor: colors.btnBackground,
			...typographyCss(buttonTypography, deviceType),
			...paddingCss(buttonPadding, deviceType)
		};

		const onClickHandler = () => {
			if (formStyle === 'default') {
				return
			}
			setIsVisibility(true);
		}

		return (
			<>
				{buttonUseIcon && (
					<button
						type="button"
						className={buttonClasses}
						style={butttonStyles}
						aria-label={
							buttonText
								? stripHTML(buttonText)
								: __('Search', 'premium-blocks-for-gutenberg')
						}
						onClick={onClickHandler}
					>
						<Icon icon={search} />
					</button>
				)}

				{!buttonUseIcon && (
					<RichText
						className={buttonClasses}
						aria-label={__('Button text', 'premium-blocks-for-gutenberg')}
						style={butttonStyles}
						placeholder={__('Add button text…', 'premium-blocks-for-gutenberg')}
						withoutInteractiveFormatting
						value={buttonText}
						onChange={(html) =>
							setAttributes({ buttonText: html })
						}
						onClick={onClickHandler}
					/>
				)}
			</>
		);
	};

	const {
		sidebarIsOpened,
	} = useSelect((select) => {

		return {
			sidebarIsOpened: !!(
				select(interfaceStore).getActiveComplementaryArea(
					editPostStore.name
				) || select(editPostStore).isPublishSidebarOpened()
			),
		};
	}, []);

	useEffect(() => {
		const resizeModal = setTimeout(() => {
			if (formStyle === 'button') {
				const modalElement = ref.current.querySelector('.premium-search-modal');
				const bodyWidth = sidebarIsOpened ? `${document.body.querySelector('.interface-interface-skeleton__content').clientWidth}px` : '100%';
				const editorHeaderHeight = document.body.querySelector('.interface-interface-skeleton__header').clientHeight;
				modalElement.style.width = `${bodyWidth}`;
				modalElement.style.top = `${editorHeaderHeight}px`;
			}
		});

		return () => {
			clearTimeout(resizeModal);
		};
	}, [isSelected, formStyle, sidebarIsOpened])

	const controls = (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						title={__('Toggle search label', 'premium-blocks-for-gutenberg')}
						icon={toggleLabel}
						onClick={() => {
							setAttributes({
								showLabel: !showLabel,
							});
						}}
						className={showLabel ? 'is-pressed' : undefined}
					/>
					{formStyle === 'default' && <ToolbarDropdownMenu
						icon={getButtonPositionIcon()}
						label={__('Change button position', 'premium-blocks-for-gutenberg')}
						controls={buttonPositionControls}
					/>}
					{!hasNoButton && (
						<ToolbarButton
							title={__('Use button with icon', 'premium-blocks-for-gutenberg')}
							icon={buttonWithIcon}
							onClick={() => {
								setAttributes({
									buttonUseIcon: !buttonUseIcon,
								});
							}}
							className={
								buttonUseIcon ? 'is-pressed' : undefined
							}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<InspectorTabs tabs={['layout', 'style', 'advance']}>
					<InspectorTab key={'layout'}>
						<PanelBody title={__('Display Settings', 'premium-blocks-for-gutenberg')}>
							<ToggleControl
								checked={ajaxSearch}
								onChange={(value) => {
									setAttributes({
										ajaxSearch: value,
									});
								}}
								label={__('Enable Ajax Search', 'premium-blocks-for-gutenberg')}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'style'}>
						<PanelBody title={__('General', 'premium-blocks-for-gutenberg')}>
							<SelectControl
								label={__("From Style", 'premium-blocks-for-gutenberg')}
								options={[
									{
										value: "default",
										label: __("Form", 'premium-blocks-for-gutenberg')
									},
									{
										value: "button",
										label: __("Button", 'premium-blocks-for-gutenberg')
									}
								]}
								value={formStyle}
								onChange={style => {
									setAttributes({
										buttonPosition: 'button-outside',
										formStyle: style
									});
								}}
							/>
							{formStyle === 'button' && (
								<SelectControl
									label={__("Button Position", 'premium-blocks-for-gutenberg')}
									options={[
										{
											value: "static",
											label: __("Static", 'premium-blocks-for-gutenberg')
										},
										{
											value: "float",
											label: __("Float", 'premium-blocks-for-gutenberg')
										}
									]}
									value={position}
									onChange={style => setAttributes({ position: style })}
								/>
							)}
							{formStyle === 'button' && position === 'float' && (
								<>
									<SelectControl
										label={__("Float Position", 'premium-blocks-for-gutenberg')}
										options={[
											{
												value: "top-right",
												label: __("Top Right", 'premium-blocks-for-gutenberg')
											},
											{
												value: "top-left",
												label: __("Top Left", 'premium-blocks-for-gutenberg')
											},
											{
												value: "bottom-right",
												label: __("Bottom Right", 'premium-blocks-for-gutenberg')
											},
											{
												value: "bottom-left",
												label: __("Bottom Left", 'premium-blocks-for-gutenberg')
											},
										]}
										value={floatPosition}
										onChange={style => setAttributes({ floatPosition: style })}
									/>
									{floatPosition.includes('top') && <RangeControl
										label={__('Top', 'premium-blocks-for-gutenberg')}
										value={floatValues.top}
										onChange={(size) => onChangePositionSide({ top: size })}
										min={0}
										max={1000}
									/>}
									{floatPosition.includes('bottom') && <RangeControl
										label={__('Bottom', 'premium-blocks-for-gutenberg')}
										value={floatValues.bottom}
										onChange={(size) => onChangePositionSide({ bottom: size })}
										min={0}
										max={1000}
									/>}
									{floatPosition.includes('right') && <RangeControl
										label={__('Right', 'premium-blocks-for-gutenberg')}
										value={floatValues.right}
										onChange={(size) => onChangePositionSide({ right: size })}
										min={0}
										max={1000}
									/>}
									{floatPosition.includes('left') && <RangeControl
										label={__('Left', 'premium-blocks-for-gutenberg')}
										value={floatValues.left}
										onChange={(size) => onChangePositionSide({ left: size })}
										min={0}
										max={1000}
									/>}
								</>
							)}
						</PanelBody>
						{formStyle === 'default' && (
							<PanelBody
								title={__("Input", 'premium-blocks-for-gutenberg')}
								className="premium-panel-body"
								initialOpen={false}
							>
								<PremiumTypo
									value={typography}
									onChange={newValue => setAttributes({ typography: newValue })}
								/>
								<hr />
								<AdvancedPopColorControl
									label={__(`Form Text Color`, 'premium-blocks-for-gutenberg')}
									colorValue={colors.text}
									onColorChange={newValue => setColor('text', newValue)}
									colorDefault={''}
								/>
								<AdvancedPopColorControl
									label={__(`Form Background Color`, 'premium-blocks-for-gutenberg')}
									colorValue={colors.background}
									onColorChange={newValue => setColor('background', newValue)}
									colorDefault={''}
								/>
								<hr />
								<SpacingComponent value={padding} responsive={true} showUnits={true} label={__('Input Padding', 'premium-blocks-for-gutenberg')} onChange={(value) => onChangeSpacing({ padding: value })} />
								<hr />
								<PremiumBorder
									label={__("Border", 'premium-blocks-for-gutenberg')}
									value={border}
									onChange={(value) => setAttributes({ border: value })}
								/>
							</PanelBody>
						)}
						<PanelBody
							title={__("Button", 'premium-blocks-for-gutenberg')}
							className="premium-panel-body"
							initialOpen={false}
						>
							{!buttonUseIcon && (
								<>
									<PremiumTypo
										value={buttonTypography}
										onChange={newValue => setAttributes({ buttonTypography: newValue })}
									/>
									<hr />
								</>
							)}
							<InsideTabs>
								<InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
									<Fragment>
										<AdvancedPopColorControl
											label={__(`Color`, 'premium-blocks-for-gutenberg')}
											colorValue={colors.btnText}
											onColorChange={newValue => setColor('btnText', newValue)}
											colorDefault={''}
										/>
										<AdvancedPopColorControl
											label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
											colorValue={colors.btnBackground}
											onColorChange={newValue => setColor('btnBackground', newValue)}
											colorDefault={''}
										/>
									</Fragment>
								</InsideTab>
								<InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
									<Fragment>
										<AdvancedPopColorControl
											label={__(`Button Text Color`, 'premium-blocks-for-gutenberg')}
											colorValue={colors.btnHoverText}
											onColorChange={newValue => setColor('btnHoverText', newValue)}
											colorDefault={''}
										/>
										<AdvancedPopColorControl
											label={__(`Button Background Color`, 'premium-blocks-for-gutenberg')}
											colorValue={colors.btnHoverBackground}
											onColorChange={newValue => setColor('btnHoverBackground', newValue)}
											colorDefault={''}
										/>
									</Fragment>
								</InsideTab>
							</InsideTabs>
							<SpacingComponent value={buttonPadding} responsive={true} showUnits={true} label={__('Button Padding', 'premium-blocks-for-gutenberg')} onChange={(value) => onChangeSpacing({ buttonPadding: value })} />
						</PanelBody>
						{ajaxSearch && (
							<PanelBody
								title={formStyle === 'button' ? __('Modal', 'premium-blocks-for-gutenberg') : __('Dropdown', 'premium-blocks-for-gutenberg')}
								className="premium-panel-body"
								initialOpen={false}
							>
								<InsideTabs>
									<InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
										<Fragment>
											{ajaxSearch && (
												<AdvancedPopColorControl
													label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
													colorValue={colors.link}
													onColorChange={newValue => setColor('link', newValue)}
													colorDefault={''}
												/>
											)}
											{formStyle === 'button' && (
												<AdvancedPopColorControl
													label={__(`Modal Background Color`, 'premium-blocks-for-gutenberg')}
													colorValue={colors.modal}
													onColorChange={newValue => setColor('modal', newValue)}
													colorDefault={''}
												/>
											)}
											{formStyle === 'default' && (
												<>
													{ajaxSearch && (
														<AdvancedPopColorControl
															label={__(`Dropdown Background Color`, 'premium-blocks-for-gutenberg')}
															colorValue={colors.dropdown}
															onColorChange={newValue => setColor('dropdown', newValue)}
															colorDefault={''}
														/>
													)}

												</>
											)}
										</Fragment>
									</InsideTab>
									<InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
										<Fragment>
											{ajaxSearch && (
												<AdvancedPopColorControl
													label={__(`Links Color`, 'premium-blocks-for-gutenberg')}
													colorValue={colors.linkHover}
													onColorChange={newValue => setColor('linkHover', newValue)}
													colorDefault={''}
												/>
											)}
											<AdvancedPopColorControl
												label={__(`Button Text Color`, 'premium-blocks-for-gutenberg')}
												colorValue={colors.btnHoverText}
												onColorChange={newValue => setColor('btnHoverText', newValue)}
												colorDefault={''}
											/>
											<AdvancedPopColorControl
												label={__(`Button Background Color`, 'premium-blocks-for-gutenberg')}
												colorValue={colors.btnHoverBackground}
												onColorChange={newValue => setColor('btnHoverBackground', newValue)}
												colorDefault={''}
											/>
										</Fragment>
									</InsideTab>
								</InsideTabs>
							</PanelBody>
						)}
						{showLabel &&
							<PanelBody
								title={__('Label', 'premium-blocks-for-gutenberg')}
								initialOpen={false}
							>
								<AdvancedPopColorControl
									label={__(`Color`, 'premium-blocks-for-gutenberg')}
									colorValue={colors.label}
									onColorChange={newValue => setColor('label', newValue)}
									colorDefault={''}
								/>
							</PanelBody>}
					</InspectorTab>
					<InspectorTab key={"advance"}>
						<PremiumResponsiveTabs
							Desktop={hideDesktop}
							Tablet={hideTablet}
							Mobile={hideMobile}
							onChangeDesktop={(value) =>
								setAttributes({
									hideDesktop: value,
								})
							}
							onChangeTablet={(value) =>
								setAttributes({
									hideTablet: value,
								})
							}
							onChangeMobile={(value) =>
								setAttributes({
									hideMobile: value,
								})
							}
						/>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);

	const blockProps = useBlockProps({
		className: getBlockClassNames(),
		style: {
			position: position === 'float' && formStyle === 'button' && !isVisibility ? 'fixed' : '',
			top: position === 'float' && floatPosition.includes('top') ? floatValues.top : '',
			right: position === 'float' && floatPosition.includes('right') ? floatValues.right : '',
			bottom: position === 'float' && floatPosition.includes('bottom') ? floatValues.bottom : '',
			left: position === 'float' && floatPosition.includes('left') ? floatValues.left : '',
		}
	});

	const labelStyles = {
		color: colors.label
	};

	const loadStyles = () => {
		const styles = {};

		styles[`.${blockId}`] = {
			'--pbg-dropdown-bg-color': colors?.dropdown,
			'--pbg-link-color': colors?.link,
			'--pbg-link-hover-color': colors?.linkHover,
			'--pbg-modal-bg-color': colors?.modal,
		}

		styles[`.${blockId} .wp-block-premium-search__button:hover`] = {
			'color': colors?.btnHoverText,
			'background-color': colors?.btnHoverBackground,
		}

		return generateCss(styles);
	}

	return (
		<div {...blockProps} ref={ref}>
			<style
				dangerouslySetInnerHTML={{
					__html: loadStyles()
				}}
			/>
			{controls}

			{showLabel && (
				<RichText
					className="wp-block-premium-search__label"
					style={labelStyles}
					aria-label={__('Label text', 'premium-blocks-for-gutenberg')}
					placeholder={__('Add label…', 'premium-blocks-for-gutenberg')}
					withoutInteractiveFormatting
					value={label}
					onChange={(html) => setAttributes({ label: html })}
				/>
			)}

			{formStyle === 'default' && (
				<ResizableBox
					className={classnames(
						'wp-block-premium-search__inside-wrapper',
						isButtonPositionInside ? '' : undefined
					)}
					style={isButtonPositionInside ? textFieldStyles : {}}
					minWidth={MIN_WIDTH}
					enable={getResizableSides()}
					onResizeStart={(event, direction, elt) => {
						toggleSelection(false);
					}}
					onResizeStop={(event, direction, elt, delta) => {
						toggleSelection(true);
					}}
					showHandle={isSelected}
				>
					{(isButtonPositionInside || isButtonPositionOutside) && (
						<>
							{renderTextField()}
							{renderButton()}
						</>
					)}

					{hasOnlyButton && renderButton()}
					{hasNoButton && renderTextField()}
					{ajaxSearch && posts.length > 0 && (
						<div className='premium-search-dropdown'>
							{posts.map(post => {
								return <a href={post.url} className='premium-search-item'>
									{post._embedded['wp:featuredmedia'] && (
										<img
											{...{
												src: (
													(
														post._embedded['wp:featuredmedia'][0]
															.media_details || {
															sizes: {},
														}
													).sizes || {}
												).thumbnail
													? (
														post._embedded['wp:featuredmedia'][0]
															.media_details || {
															sizes: [],
														}
													).sizes.thumbnail.source_url
													: values(
														(
															post._embedded['wp:featuredmedia'][0]
																.media_details || {
																sizes: [],
															}
														).sizes || {}
													).reduce(
														(currentSmallest, current) =>
															current.width <
																currentSmallest.width
																? current
																: currentSmallest,
														{
															width: 9999999999,
														}
													).source_url ||
													post._embedded['wp:featuredmedia'][0].source_url,
											}}
										/>
									)}
									<span>{post.title}</span>
								</a>
							})}
						</div>
					)}
				</ResizableBox>
			)}
			{formStyle !== 'default' && renderButton()}
			{formStyle === 'button' && (
				<Modal isOpen={isVisibility} setIsOpen={setIsVisibility}>
					<div className='premium-advanced-search-form'>
						<div>
							<input type='search' placeholder={__("Search", "premium-blocks-for-gutenberg")} onChange={(e) => inputChangeHandler(e)} />
							<div className='premium-advanced-search-icon'>
								<Icon icon={search} />
							</div>
						</div>
						{ajaxSearch && posts.length > 0 && (
							<div className='premium-search-results'>
								{posts.map(post => {
									return <a href={post.url} className='premium-search-item'>
										{post._embedded['wp:featuredmedia'] && (
											<div className='premium-image-container'>
												<img
													{...{
														src: (
															(
																post._embedded['wp:featuredmedia'][0]
																	.media_details || {
																	sizes: {},
																}
															).sizes || {}
														).thumbnail
															? (
																post._embedded['wp:featuredmedia'][0]
																	.media_details || {
																	sizes: [],
																}
															).sizes.thumbnail.source_url
															: values(
																(
																	post._embedded['wp:featuredmedia'][0]
																		.media_details || {
																		sizes: [],
																	}
																).sizes || {}
															).reduce(
																(currentSmallest, current) =>
																	current.width <
																		currentSmallest.width
																		? current
																		: currentSmallest,
																{
																	width: 9999999999,
																}
															).source_url ||
															post._embedded['wp:featuredmedia'][0].source_url,
													}}
												/>
												<div class="premium-ratio"></div>
											</div>
										)}
										<span>{post.title}</span>
									</a>
								})}
							</div>
						)}
					</div>
				</Modal>
			)}
			{loadFonts}
			{loadButtonFonts}
		</div>
	);
}
export default withSelect((select) => {
	const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
	let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

	return {
		deviceType: deviceType
	}
})(SearchEdit)