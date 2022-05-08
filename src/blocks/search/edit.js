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
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
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

	const getBlockClassNames = () => {
		return classnames(
			className,
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

	const renderTextField = () => {
		// If the input is inside the wrapper, the wrapper gets the border color styles/classes, not the input control.
		const textFieldClasses = classnames(
			'wp-block-premium-search__input',
			isButtonPositionInside ? undefined : ''
		);

		return (
			<input
				type="search"
				className={textFieldClasses}
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

		return (
			<>
				{buttonUseIcon && (
					<button
						type="button"
						className={buttonClasses}
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
				<PanelBody title={__('Colors')}>
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
				</PanelBody>
			</InspectorControls>
		</>
	);

	const getWrapperStyles = () => {

	};

	const blockProps = useBlockProps({
		className: getBlockClassNames(),
	});

	return (
		<div {...blockProps}>
			{controls}

			{showLabel && (
				<RichText
					className="wp-block-premium-search__label"
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
