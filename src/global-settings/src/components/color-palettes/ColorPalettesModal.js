
const { __, sprintf } = wp.i18n;
import { animated } from '@react-spring/web'
import { Fragment, useContext } from 'react';
import PalettePreview from './PalettePreview'
import classnames from "classnames";
import { useState } from 'react';
import SettingsContext from '../../store/settings-store';

const ColorPalettesModal = ({ value, onChange, titles, wrapperProps = {}, handleDeletePalette }) => {
	const { globalColors } = useContext(SettingsContext);
	const [typeOfPalette, setTypeOfPalette] = useState("light");
	const pbgPaletteColors = value.filter(pallet => pallet.skin === typeOfPalette && pallet.type === "system");
	const customPaletteColors = value.filter(pallet => { return pallet.skin === typeOfPalette && pallet.type === "custom" });
	const initPallet = (pallet) => {
		const newPalletColors = pallet.colors.map(color => {
			return {
				name: color.name,
				slug: color.slug,
				color: color.color,
				default: true,
				skipModal: true
			}
		})
		const newPalletCustomColors = pallet.custom_colors.length ? pallet.custom_colors.map(color => {
			return {
				name: color.name,
				slug: color.slug,
				color: color.color,
				default: true,
				skipModal: true
			}
		}) : [];

		return { ...pallet, colors: newPalletColors, custom_colors: newPalletCustomColors }
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
						pallet={initPallet(palette)}
						className={classnames(`premium-custom-palette__container`, {
							'premium-active': palette.id === globalColors.current_palett
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
						pallet={initPallet(palette)}
						className={
							palette.id === globalColors.current_palett ? 'premium-active' : ''
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