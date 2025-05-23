import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save() {

    return (
        <div {...useBlockProps.save()}>
			 <div className="block">
                <div className="tab-buttons">
                    <InnerBlocks.Content
                        filter={(block) => block.name === 'create-block/tab-button'}
                    />
                </div>
                <div className="tab-content">
                    <InnerBlocks.Content
                        filter={(block) => block.name === 'create-block/tab-content'}
                    />
                </div>
               
            </div>
		</div>
    )
}