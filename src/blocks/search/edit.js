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
import { useEffect, useState } from '@wordpress/element';
import {
	ToolbarDropdownMenu,
	ToolbarGroup,
	ToolbarButton,
	ResizableBox,
	PanelBody,
	TabPanel,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { Icon, search } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';
import fetchLinkSuggestions from './fetchLinkSuggestions';

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
		ajaxSearch
	} = attributes;
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

	const isButtonPositionInside = 'button-inside' === buttonPosition;
	const isButtonPositionOutside = 'button-outside' === buttonPosition;
	const hasNoButton = 'no-button' === buttonPosition;
	const hasOnlyButton = 'button-only' === buttonPosition;

	let padding = spacing.padding ? spacing.padding : {};
	const fontSize = typography.size ? typography.size : {};
	let buttonPadding = spacing.buttonPadding ? spacing.buttonPadding : {};
	const buttonFontSize = buttonTypography.size ? buttonTypography.size : {};

	const getBlockClassNames = () => {
		return classnames(
			className,
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
				: undefined
		);
	};

	const buttonPositionControls = [
		{
			role: 'menuitemradio',
			title: __('Button outside'),
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
			title: __('Button inside'),
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
			title: __('No button'),
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
		if (hasOnlyButton) {
			return {};
		}

		return {
			right: align !== 'right',
			left: align === 'right',
		};
	};

	const setColor = (color, value) => {
		const newColors = { ...colors };
		newColors[color] = value;
		setAttributes({ colors: newColors });
	}

	const onChangeSpacing = (value) => {
		const newSpacing = { ...spacing, ...value };
		console.log(newSpacing);
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
		borderTopWidth: border?.borderWidth?.[deviceType]?.top,
		borderRightWidth: border?.borderWidth?.[deviceType]?.right,
		borderBottomWidth: border?.borderWidth?.[deviceType]?.bottom,
		borderLeftWidth: border?.borderWidth?.[deviceType]?.left,
		borderTopLeftRadius: `${border?.borderRadius?.[deviceType]?.top || 0}px`,
		borderTopRightRadius: `${border?.borderRadius?.[deviceType]?.right || 0}px`,
		borderBottomLeftRadius: `${border?.borderRadius?.[deviceType]?.bottom || 0}px`,
		borderBottomRightRadius: `${border?.borderRadius?.[deviceType]?.left || 0}px`,
		borderColor: border?.borderColor,
		borderStyle: border?.borderType,
		paddingTop: `${padding?.[deviceType]?.top}${padding?.unit}`,
		paddingRight: `${padding?.[deviceType]?.right}${padding?.unit}`,
		paddingBottom: `${padding?.[deviceType]?.bottom}${padding?.unit}`,
		paddingLeft: `${padding?.[deviceType]?.left}${padding?.unit}`,
	};

	const textTypoStyles = {
		fontSize: `${fontSize?.[deviceType]}${fontSize?.unit}`,
		fontFamily: typography.fontFamily,
		fontStyle: typography.fontStyle,
		fontWeight: typography.fontWeight,
		letterSpacing: typography.letterSpacing,
		textDecoration: typography.textDecoration,
		textTransform: typography.textTransform,
		lineHeight: `${typography.lineHeight}px`,
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
				aria-label={__('Optional placeholder text')}
				// We hide the placeholder field's placeholder when there is a value. This
				// stops screen readers from reading the placeholder field's placeholder
				// which is confusing.
				placeholder={
					placeholder ? undefined : __('Optional placeholder…')
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
			'wp-block-premium-search__button',
			isButtonPositionInside ? undefined : '',
			buttonUseIcon ? 'has-icon' : undefined
		);
		const butttonStyles = {
			color: colors.btnText,
			backgroundColor: colors.btnBackground,
			paddingTop: `${buttonPadding?.[deviceType]?.top}${buttonPadding?.unit}`,
			paddingRight: `${buttonPadding?.[deviceType]?.right}${buttonPadding?.unit}`,
			paddingBottom: `${buttonPadding?.[deviceType]?.bottom}${buttonPadding?.unit}`,
			paddingLeft: `${buttonPadding?.[deviceType]?.left}${buttonPadding?.unit}`,
			fontSize: `${buttonFontSize?.[deviceType]}${buttonFontSize?.unit}`,
			fontFamily: buttonTypography.fontFamily,
			fontStyle: buttonTypography.fontStyle,
			fontWeight: buttonTypography.fontWeight,
			letterSpacing: buttonTypography.letterSpacing,
			textDecoration: buttonTypography.textDecoration,
			textTransform: buttonTypography.textTransform,
			lineHeight: `${buttonTypography.lineHeight}px`,
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
								: __('Search')
						}
						onClick={onClickHandler}
					>
						<Icon icon={search} />
					</button>
				)}

				{!buttonUseIcon && (
					<RichText
						className={buttonClasses}
						aria-label={__('Button text')}
						style={butttonStyles}
						placeholder={__('Add button text…')}
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

	const controls = (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						title={__('Toggle search label')}
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
						label={__('Change button position')}
						controls={buttonPositionControls}
					/>}
					{!hasNoButton && (
						<ToolbarButton
							title={__('Use button with icon')}
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
						<PanelBody title={__('Display Settings')}>
							<ToggleControl
								checked={ajaxSearch}
								onChange={(value) => {
									setAttributes({
										ajaxSearch: value,
									});
								}}
								label={__('Enable Ajax Search')}
							/>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'style'}>
						<PanelBody title={__('General')}>
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
							{formStyle === 'default' && (
								<PremiumBorder
									label={__("Border")}
									value={border}
									borderType={border.borderType}
									borderColor={border.borderColor}
									borderWidth={border.borderWidth}
									borderRadius={border.borderRadius}
									onChange={(value) => setAttributes({ border: value })}
								/>
							)}
						</PanelBody>
						{formStyle === 'default' && (
							<PanelBody
								title={__("Input Typography", 'premium-blocks-for-gutenberg')}
								className="premium-panel-body"
								initialOpen={false}
							>
								<PremiumTypo
									components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
									value={typography}
									onChange={newValue => setAttributes({ submenuTypography: newValue })}
								/>
							</PanelBody>
						)}
						{!buttonWithIcon && (
							<PanelBody
								title={__("Button Typography", 'premium-blocks-for-gutenberg')}
								className="premium-panel-body"
								initialOpen={false}
							>
								<PremiumTypo
									components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
									value={buttonTypography}
									onChange={newValue => setAttributes({ buttonTypography: newValue })}
								/>
							</PanelBody>
						)}
						<PanelBody
							title={__('Spacing', 'premium-blocks-for-gutenberg')}
							initialOpen={false}
						>
							{formStyle === 'default' && (
								<SpacingComponent value={padding} responsive={true} showUnits={true} label={__('Input Padding')} onChange={(value) => onChangeSpacing({ padding: value })} />
							)}
							<SpacingComponent value={buttonPadding} responsive={true} showUnits={true} label={__('Button Padding')} onChange={(value) => onChangeSpacing({ buttonPadding: value })} />
						</PanelBody>
						<PanelBody title={__('Colors')}>
							<TabPanel
								className="premium-color-tabpanel"
								activeClass="active-tab"
								tabs={[
									{
										name: "normal",
										title: "Normal",
										className: "premium-tab",
									},
									{
										name: "hover",
										title: "Hover",
										className: "premium-tab",
									},
								]}
							>
								{(tab) => {
									if ("normal" === tab.name) {
										return (
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
													</>
												)}
												<AdvancedPopColorControl
													label={__(`Button Text Color`, 'premium-blocks-for-gutenberg')}
													colorValue={colors.btnText}
													onColorChange={newValue => setColor('btnText', newValue)}
													colorDefault={''}
												/>
												<AdvancedPopColorControl
													label={__(`Button Background Color`, 'premium-blocks-for-gutenberg')}
													colorValue={colors.btnBackground}
													onColorChange={newValue => setColor('btnBackground', newValue)}
													colorDefault={''}
												/>
												{showLabel && <AdvancedPopColorControl
													label={__(`Label Color`, 'premium-blocks-for-gutenberg')}
													colorValue={colors.label}
													onColorChange={newValue => setColor('label', newValue)}
													colorDefault={''}
												/>}
											</Fragment>
										);
									}
									if ("hover" === tab.name) {
										return (
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
										);
									}
								}}
							</TabPanel>
						</PanelBody>
					</InspectorTab>
					<InspectorTab key={'advance'} />
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

	const getSecondPart = (str) => {
		return str.split(':')[1];
	}

	let styleArry = [
		`#${blockProps.id}{`,
		`--pbg-dropdown-bg-color: ${colors.dropdown};`,
		`--pbg-link-color: ${colors.link}!important;`,
		`--pbg-link-hover-color: ${colors.linkHover}!important;`,
		`--pbg-modal-bg-color: ${colors.modal};`,
		`}`,
		`#${blockProps.id} .wp-block-premium-search__button:hover{`,
		`color: ${colors.btnHoverText}!important;`,
		`background-color: ${colors.btnHoverBackground}!important;`,
		`}`,
	];
	styleArry = styleArry.filter(styleLine => {
		const notAllowed = ['px;', 'undefined;', ';', '!important;'];
		const style = getSecondPart(styleLine) ? getSecondPart(styleLine).replace(/\s/g, '') : styleLine;
		if (!notAllowed.includes(style)) {
			return style;
		}
	}).join('\n')

	return (
		<div {...blockProps}>
			<style
				dangerouslySetInnerHTML={{
					__html: styleArry
				}}
			/>
			{controls}

			{showLabel && (
				<RichText
					className="wp-block-premium-search__label"
					style={labelStyles}
					aria-label={__('Label text')}
					placeholder={__('Add label…')}
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
						<div className='pbg-search-dropdown'>
							{posts.map(post => {
								return <a href={post.url} className='pbg-search-item'>
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
					<div className='pbg-advanced-search-form'>
						<div>
							<input type='search' placeholder={__("Search")} onChange={(e) => inputChangeHandler(e)} />
							<div className='pbg-advanced-search-icon'>
								<Icon icon={search} />
							</div>
						</div>
						{ajaxSearch && posts.length > 0 && (
							<div className='pbg-search-results'>
								{posts.map(post => {
									return <a href={post.url} className='pbg-search-item'>
										{post._embedded['wp:featuredmedia'] && (
											<div className='pbg-image-container'>
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
												<div class="pbg-ratio"></div>
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
		</div>
	);
}
export default withSelect((select, props) => {
	const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
	let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

	return {
		deviceType: deviceType
	}
})(SearchEdit)