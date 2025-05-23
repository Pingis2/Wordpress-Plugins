import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

export default registerBlockType('create-block/tab-block', {
    title: __('Tab Block', 'awesome'),
    icon: 'block-default',
    category: 'tab-blocks',
    supports: {
        multiple: true,
    },

    edit: (props) => {
        const blockProps = useBlockProps();

        const blocks = wp.data.select('core/block-editor').getBlocks(props.clientId);
        const buttonsWrapper = blocks.find(b => b.name === 'create-block/tab-buttons-wrapper');
        const contentWrapper = blocks.find(b => b.name === 'create-block/tab-content-wrapper');
        const tabButtons = buttonsWrapper ? buttonsWrapper.innerBlocks : [];
        const tabContents = contentWrapper ? contentWrapper.innerBlocks : [];

        return (
            <div {...blockProps} className='tab-block'>
                    <InnerBlocks
                        allowedBlocks={[
                            'create-block/tab-buttons-wrapper',
                            'create-block/tab-content-wrapper',
                        ]}
                        template={[
                            ['create-block/tab-buttons-wrapper'],
                            ['create-block/tab-content-wrapper'],
                        ]}
                        templateLock={false}
                    />
            </div>
        )
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div {...blockProps} className='tab-block'>
                <InnerBlocks.Content />
            </div>
        )
    }

})