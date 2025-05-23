import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

export default registerBlockType('create-block/tab-content-wrapper', {
	title: __('Tab Content Wrapper'),
	parent: ['create-block/tab-block'],
	edit: () => (
		<div className="tab-content-wrapper">
			<InnerBlocks
				allowedBlocks={['create-block/tab-content']}
				template={[['create-block/tab-content']]}
				templateLock={false}
			/>
		</div>
	),
	save: () => (
		<div className="tab-content-wrapper">
			<InnerBlocks.Content />
		</div>
	),
});