/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { useEffect, useState } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { menuSlug } = attributes;
	const [ menus, setMenus ] = useState( [] );

	useEffect( () => {
		wp.apiFetch( { path: '/wp/v2/menus' } )
			.then( ( data ) => {
				setMenus(
					data.map( ( menu ) => ( {
						label: menu.name,
						value: menu.slug,
					} ) )
				);
			} )
			.catch( ( error ) => {
				console.error( 'Error fetching menus:', error );
				setMenus( [] );
			} );
	}, [] );
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Menu Settings', 'awesome' ) }>
					<SelectControl
						label={ __( 'Select Menu', 'awesome' ) }
						value={ menuSlug }
						options={ [
							{
								label: __( 'Select a menu', 'awesome' ),
								value: '',
							},
							...menus,
						] }
						onChange={ ( value ) =>
							setAttributes( { menuSlug: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				id="menuToggle"
				style={ {
					display: 'flex',
					flexDirection: 'column',
					gap: '5px',
				} }
			>
				<span
					style={ {
						background: 'black',
						width: '20px',
						height: '2px',
					} }
				></span>
				<span
					style={ {
						background: 'black',
						width: '20px',
						height: '2px',
					} }
				></span>
				<span
					style={ {
						background: 'black',
						width: '20px',
						height: '2px',
					} }
				></span>

				<div className="menu hidden">
					<div className="close-menu hidden">
						<span></span>
						<span></span>
					</div>
					<ul>
						<li>{ __( 'Menu Item 1', 'awesome' ) }</li>
						<li>{ __( 'Menu Item 2', 'awesome' ) }</li>
						<li>{ __( 'Menu Item 3', 'awesome' ) }</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
