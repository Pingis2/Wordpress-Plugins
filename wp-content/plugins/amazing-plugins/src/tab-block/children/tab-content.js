import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

export default registerBlockType( 'create-block/tab-content', {
	title: __( 'Tab Content' ),
	parent: [ 'create-block/tab-block' ],
	icon: 'content',
	category: 'tab-blocks',
	keywords: [ __( 'tab', 'awesome' ), __( 'content', 'awesome' ) ],
	icon: 'block-default',

	edit: () => {
		const blockProps = useBlockProps();

		return (
			<div { ...blockProps } className="tab-content">
				<InnerBlocks templateLock={ false } />
			</div>
		);
	},
	save: () => {
		return (
			<div className="tab-content">
				<InnerBlocks.Content />
			</div>
		);
	},
} );
