import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';


export default registerBlockType( 'create-block/tab-button', {
    title: __('Tab Button'),
    parent: ['create-block/tab-block'],
    category: 'tab-blocks',
    keywords: [__('tab', 'awesome'), __('content', 'awesome')],
    attributes: {
        title: {
            type: 'string',
            default: __('Tab Title', 'awesome'),
        },
    },
    icon: 'button',
    supports: {
        multiple: true,
        reusable: false,
    },

    

    edit: ({ attributes, setAttributes }) => {
        const { title } = attributes;
        const blockProps = useBlockProps();

        return (
            <button {...blockProps} className="tab-buttons">
                <RichText
                    tagName='button'
                    className="tab-button"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__('Tab Title', 'awesome')}
                />
            </button>
        );
    },
    save: ({ attributes}) => {
        const { title } = attributes;
        
        return (
            <div className="tab-buttons">
                <RichText.Content tagName='button' value={title} />
            </div>
        )
    },
});