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
	__experimentalUseBorderProps as useBorderProps,
	__experimentalUseColorProps as useColorProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import {
	ToolbarDropdownMenu,
	ToolbarGroup,
	Button,
	ButtonGroup,
	ToolbarButton,
	ResizableBox,
	PanelBody,
	BaseControl,
	__experimentalUseCustomUnits as useCustomUnits,
	__experimentalUnitControl as UnitControl,
	TabPanel,
	SelectControl,
} from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { Icon, search } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';

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
import {
	PC_WIDTH_DEFAULT,
	PX_WIDTH_DEFAULT,
	MIN_WIDTH,
	MIN_WIDTH_UNIT,
} from './utils.js';
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border"
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';

export default function SearchEdit({
	className,
	attributes,
	setAttributes,
	toggleSelection,
	isSelected,
	clientId,
}) {
	const {
		label,
		showLabel,
		placeholder,
		width,
		widthUnit,
		align,
		buttonText,
		buttonPosition,
		buttonUseIcon,
		formStyle,
		colors,
		postion,
		border,
		spacing,
		typography,
		buttonTypography,
		floatPostion,
		floatValues
	} = attributes;

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

	const unitControlInstanceId = useInstanceId(UnitControl);
	const unitControlInputId = `wp-block-premium-search__width-${unitControlInstanceId}`;
	const isButtonPositionInside = 'button-inside' === buttonPosition;
	const isButtonPositionOutside = 'button-outside' === buttonPosition;
	const hasNoButton = 'no-button' === buttonPosition;
	const hasOnlyButton = 'button-only' === buttonPosition;

	const units = useCustomUnits({
		availableUnits: ['%', 'px'],
		defaultValues: { '%': PC_WIDTH_DEFAULT, px: PX_WIDTH_DEFAULT },
	});

	const defaultSpacingValue = {
		desktop: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
		tablet: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		},
		mobile: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	};
	const defaultSize = {
		desktop: "",
		tablet: "",
		mobile: "",
		unit: "px"
	};

	let padding = spacing.padding ? spacing.padding : defaultSpacingValue;
	const fontSize = typography.size ? typography.size : defaultSize;
	let buttonPadding = spacing.buttonPadding ? spacing.buttonPadding : defaultSpacingValue;
	const buttonFontSize = buttonTypography.size ? buttonTypography.size : defaultSize;

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

	const borderChange = (value) => {
		const newBorder = { ...border };
		setAttributes({ border: { ...newBorder, ...value } })
	};

	const onChangePadding = (side, value, device) => {
		const newPadding = { ...padding };
		newPadding[device][side] = value;
		setAttributes({ spacing: { ...spacing, padding: newPadding } });
	}

	const onChangeButtonPadding = (side, value, device) => {
		const newPadding = { ...buttonPadding };
		newPadding[device][side] = value;
		setAttributes({ spacing: { ...spacing, buttonPadding: newPadding } });
	}

	const renderTextField = () => {
		// If the input is inside the wrapper, the wrapper gets the border color styles/classes, not the input control.
		const textFieldClasses = classnames(
			'wp-block-premium-search__input',
			isButtonPositionInside ? undefined : ''
		);
		const textFieldStyles = {
			color: colors.text,
			backgroundColor: colors.background,
			borderStyle: border.type,
			borderTopWidth: border.top,
			borderRightWidth: border.right,
			borderBottomWidth: border.bottom,
			borderLeftWidth: border.left,
			borderRadius: border.radius,
			borderColor: border.color
		};

		return (
			<input
				type="search"
				className={textFieldClasses}
				style={textFieldStyles}
				aria-label={__('Optional placeholder text')}
				// We hide the placeholder field's placeholder when there is a value. This
				// stops screen readers from reading the placeholder field's placeholder
				// which is confusing.
				placeholder={
					placeholder ? undefined : __('Optional placeholder…')
				}
				value={placeholder}
				onChange={(event) =>
					setAttributes({ placeholder: event.target.value })
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
			backgroundColor: colors.btnBackground
		};

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
					<ToolbarDropdownMenu
						icon={getButtonPositionIcon()}
						label={__('Change button position')}
						controls={buttonPositionControls}
					/>
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
				<PanelBody title={__('Display Settings')}>
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
						onChange={style => setAttributes({ formStyle: style })}
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
							value={postion}
							onChange={style => setAttributes({ postion: style })}
						/>
					)}
					{formStyle === 'default' && (
						<PremiumBorder
							borderType={border.type}
							top={border.top}
							right={border.right}
							bottom={border.bottom}
							left={border.left}
							borderColor={border.color}
							borderRadius={border.radius}
							onChangeType={(newType) => borderChange({ type: newType })}
							onChangeWidth={({ top, right, bottom, left }) => {
								borderChange({ top, right, bottom, left });
							}}
							onChangeColor={(colorValue) => borderChange({ color: colorValue })}
							onChangeRadius={(newrRadius) => borderChange({ radius: newrRadius })}
						/>
					)}
					<BaseControl
						label={__('Width')}
						id={unitControlInputId}
					>
						<UnitControl
							id={unitControlInputId}
							min={`${MIN_WIDTH}${MIN_WIDTH_UNIT}`}
							onChange={(newWidth) => {
								const filteredWidth =
									widthUnit === '%' &&
										parseInt(newWidth, 10) > 100
										? 100
										: newWidth;

								setAttributes({
									width: parseInt(filteredWidth, 10),
								});
							}}
							onUnitChange={(newUnit) => {
								setAttributes({
									width:
										'%' === newUnit
											? PC_WIDTH_DEFAULT
											: PX_WIDTH_DEFAULT,
									widthUnit: newUnit,
								});
							}}
							style={{ maxWidth: 80 }}
							value={`${width}${widthUnit}`}
							units={units}
						/>

						<ButtonGroup
							className="wp-block-premium-search__components-button-group"
							aria-label={__('Percentage Width')}
						>
							{[25, 50, 75, 100].map((widthValue) => {
								return (
									<Button
										key={widthValue}
										isSmall
										variant={
											`${widthValue}%` ===
												`${width}${widthUnit}`
												? 'primary'
												: undefined
										}
										onClick={() =>
											setAttributes({
												width: widthValue,
												widthUnit: '%',
											})
										}
									>
										{widthValue}%
									</Button>
								);
							})}
						</ButtonGroup>
					</BaseControl>
				</PanelBody>
				<PanelBody
					title={__('Input Spacing', 'premium-blocks-for-gutenberg')}
					initialOpen={false}
				>
					<PremiumResponsivePadding
						directions={["all"]}
						paddingTop={padding.desktop.top}
						paddingRight={padding.desktop.right}
						paddingBottom={padding.desktop.bottom}
						paddingLeft={padding.desktop.left}
						paddingTopTablet={padding.tablet.top}
						paddingRightTablet={padding.tablet.right}
						paddingBottomTablet={padding.tablet.bottom}
						paddingLeftTablet={padding.tablet.left}
						paddingTopMobile={padding.mobile.top}
						paddingRightMobile={padding.mobile.right}
						paddingBottomMobile={padding.mobile.bottom}
						paddingLeftMobile={padding.mobile.left}
						onChangePaddingTop={
							(device, newValue) => {
								onChangePadding('top', newValue, device);
							}
						}
						onChangePaddingRight={
							(device, newValue) => {
								onChangePadding('right', newValue, device);
							}
						}
						onChangePaddingBottom={
							(device, newValue) => {
								onChangePadding('bottom', newValue, device);
							}
						}
						onChangePaddingLeft={
							(device, newValue) => {
								onChangePadding('left', newValue, device);
							}
						}
					/>
				</PanelBody>
				<PanelBody
					title={__('Button Spacing', 'premium-blocks-for-gutenberg')}
					initialOpen={false}
				>
					<PremiumResponsivePadding
						directions={["all"]}
						paddingTop={buttonPadding.desktop.top}
						paddingRight={buttonPadding.desktop.right}
						paddingBottom={buttonPadding.desktop.bottom}
						paddingLeft={buttonPadding.desktop.left}
						paddingTopTablet={buttonPadding.tablet.top}
						paddingRightTablet={buttonPadding.tablet.right}
						paddingBottomTablet={buttonPadding.tablet.bottom}
						paddingLeftTablet={buttonPadding.tablet.left}
						paddingTopMobile={buttonPadding.mobile.top}
						paddingRightMobile={buttonPadding.mobile.right}
						paddingBottomMobile={buttonPadding.mobile.bottom}
						paddingLeftMobile={buttonPadding.mobile.left}
						onChangePaddingTop={
							(device, newValue) => {
								onChangeButtonPadding('top', newValue, device);
							}
						}
						onChangePaddingRight={
							(device, newValue) => {
								onChangeButtonPadding('right', newValue, device);
							}
						}
						onChangePaddingBottom={
							(device, newValue) => {
								onChangeButtonPadding('bottom', newValue, device);
							}
						}
						onChangePaddingLeft={
							(device, newValue) => {
								onChangeButtonPadding('left', newValue, device);
							}
						}
					/>
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
										{formStyle === 'default' && (
											<>
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
										<AdvancedPopColorControl
											label={__(`Label Color`, 'premium-blocks-for-gutenberg')}
											colorValue={colors.label}
											onColorChange={newValue => setColor('label', newValue)}
											colorDefault={''}
										/>
									</Fragment>
								);
							}
							if ("hover" === tab.name) {
								return (
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
								);
							}
						}}
					</TabPanel>

				</PanelBody>
			</InspectorControls>
		</>
	);

	const blockProps = useBlockProps({
		className: getBlockClassNames(),
	});

	const labelStyles = {
		color: colors.label
	};

	const getSecondPart = (str) => {
		return str.split(':')[1];
	}

	let styleArry = [
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
					size={{
						width: `${width}${widthUnit}`,
					}}
					className={classnames(
						'wp-block-premium-search__inside-wrapper',
						isButtonPositionInside ? '' : undefined
					)}
					minWidth={MIN_WIDTH}
					enable={getResizableSides()}
					onResizeStart={(event, direction, elt) => {
						setAttributes({
							width: parseInt(elt.offsetWidth, 10),
							widthUnit: 'px',
						});
						toggleSelection(false);
					}}
					onResizeStop={(event, direction, elt, delta) => {
						setAttributes({
							width: parseInt(width + delta.width, 10),
						});
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
				</ResizableBox>
			)}
			{formStyle !== 'default' && renderButton()}
		</div>
	);
}
