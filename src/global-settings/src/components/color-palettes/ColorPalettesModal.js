
const { __, sprintf } = wp.i18n;
import { animated } from '@react-spring/web'
import { Fragment, useContext } from 'react';
import PalettePreview from './PalettePreview'
import classnames from "classnames";
import { useState } from 'react';
import SettingsContext from '../../store/settings-store';

const ColorPalettesModal = ({ value, onChange, wrapperProps = {}, handleDeletePalette }) => {
	const { globalColors } = useContext(SettingsContext);
	const [typeOfPalette, setTypeOfPalette] = useState("light");
	const pbgPaletteColors = value.filter(palette => palette.skin === typeOfPalette && palette.type === "system");
	const customPaletteColors = value.filter(palette => { return palette.skin === typeOfPalette && palette.type === "custom" });
	const initPalette = (palette) => {
		const newPaletteColors = palette.colors.map(color => {
			return {
				name: color.name,
				slug: color.slug,
				color: color.color,
				default: true,
				skipModal: true
			}
		})

		return { ...palette, colors: newPaletteColors }
	}
	return (
		<animated.div
			className="premium-option-modal premium-palettes-modal"
			{...wrapperProps}>
			<div className={`premium-type-control`}>
				<span className={classnames({ active: typeOfPalette === "light" })}
					onClick={() => {
						setTypeOfPalette("light");
					}}>Light
				</span>
				<span className={classnames({ active: typeOfPalette === "dark" })}
					onClick={() => {
						setTypeOfPalette("dark");
					}}
				>	Dark
				</span>
			</div>
			{customPaletteColors.length > 0 && <div className={`premium_label_type__palette`}>{__(`my palettes`)}</div>}
			{customPaletteColors.map((palette, index) => (
				<Fragment>
					<PalettePreview
						colors={initPalette(palette).colors}
						className={classnames(`premium-custom-palette__container`, {
							'premium-active': palette.id === globalColors.current_palette
						})
						}
						renderBefore={() => (
							<Fragment>
								<label>
									{palette.name ? palette.name : sprintf(__('Palette #%s', 'kemet'), index + 1)}
								</label>
								<button className={`premium-delete-palette`} onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									handleDeletePalette(palette.id)
								}}></button>
							</Fragment>
						)}
						onClick={() => {
							onChange(palette);
						}}
						canAdd={false}
					/>
				</Fragment>


			))
			}
			<div className={`premium_label_type__palette`}>{__(`Default palettes`, "premium-blocks-for-gutenberg")}</div>
			{pbgPaletteColors.map((palette, index) => (
				<Fragment>
					<PalettePreview
						colors={initPalette(palette).colors}
						className={
							palette.id === globalColors.current_palette ? 'premium-active' : ''
						}
						renderBefore={() => (
							<label>
								{palette.name ? palette.name : sprintf(__('Palette #%s', 'kemet'), index + 1)}
							</label>
						)}
						onClick={() => {
							onChange(palette)
						}}
						canAdd={false}
					/>
				</Fragment>


			))
			}
		</animated.div >
	)
}

export default ColorPalettesModal