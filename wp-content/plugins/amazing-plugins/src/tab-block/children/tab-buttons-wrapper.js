import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

export default registerBlockType( 'create-block/tab-buttons-wrapper', {
	title: __( 'Tab Buttons Wrapper' ),
	parent: [ 'create-block/tab-block' ],
	edit: () => (
		<div className="tab-buttons-wrapper">
			<InnerBlocks
				allowedBlocks={ [ 'create-block/tab-button' ] }
				template={ [ [ 'create-block/tab-button' ] ] }
				templateLock={ false }
			/>
		</div>
	),
	save: () => (
		<div className="tab-buttons-wrapper">
			<InnerBlocks.Content />
		</div>
	),
} );
