
const { __, sprintf } = wp.i18n;
import { animated } from '@react-spring/web'
import { Fragment } from 'react';
import PalettePreview from './PalettePreview'
import classnames from "classnames";
import { useState } from 'react';

const ColorPalettesModal = ({ value, onChange, titles, wrapperProps = {}, handleDeletePalette }) => {
	const [typeOfPalette, setTypeOfPalette] = useState("light");
	const pbgPaletteColors = value.filter(pallet => pallet.skin === typeOfPalette && pallet.type === "system");
	const customPaletteColors = value.filter(pallet => { return pallet.skin === typeOfPalette && pallet.type === "custom" });
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
						currentPalette={palette}
						className={classnames(`premium-custom-palette__container`, {
							'premium-active': value.current_palette === palette.id
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
							const { id, ...colors } = palette
							onChange({
								...value,
								current_palette: id,
								...colors,
							})
						}}
						skipModal={true}
					/>
				</Fragment>


			))
			}
			<div className={`premium_label_type__palette`}>{__(`Default palettes`, "kemet")}</div>
			{pbgPaletteColors.map((palette, index) => (
				<Fragment>
					<PalettePreview
						value={palette.colors.map(color => {
							return {
								name: titles[index],
								slug: color.id,
								color: color.color,
								default: true,
								skipModal: true
							}
						})}
						className={
							palette.active ? 'premium-active' : ''
						}
						renderBefore={() => (
							<label>
								{palette.name ? palette.name : sprintf(__('Palette #%s', 'kemet'), index + 1)}
							</label>
						)}
						onClick={() => {
							const { id, ...colors } = palette
							onChange({
								...value,
								current_palette: id,
								...colors,
							})
						}}

					/>
				</Fragment>


			))
			}
		</animated.div >
	)
}

export default ColorPalettesModal