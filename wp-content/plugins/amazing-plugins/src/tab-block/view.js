/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-tab-block block)' );
/* eslint-enable no-console */

document.addEventListener( 'DOMContentLoaded', function () {
	document.querySelectorAll( '.tab-block' ).forEach( ( tabBlock ) => {
		const buttons = tabBlock.querySelectorAll(
			'.tab-buttons-wrapper button'
		);
		const contents = tabBlock.querySelectorAll(
			'.tab-content-wrapper .tab-content'
		);

		buttons.forEach( ( button, index ) => {
			button.addEventListener( 'click', function () {
				// Remove active class from all buttons
				buttons.forEach( ( btn ) => btn.classList.remove( 'active' ) );
				contents.forEach( ( content ) =>
					content.classList.add( 'hidden' )
				);

				button.classList.add( 'active' );
				if ( contents[ index ] ) {
					contents[ index ].classList.remove( 'hidden' );
				}
			} );
		} );

		// Ensure only the first content is visible by default
		if ( buttons.length && contents.length ) {
			buttons[ 0 ].classList.add( 'active' );
			contents.forEach( ( content, index ) => {
				content.classList.toggle( 'hidden', index !== 0 );
			} );
		}
	} );
} );
