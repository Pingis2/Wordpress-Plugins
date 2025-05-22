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
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

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

import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

export default function Edit() {
	const blockProps = useBlockProps();
	const [activeTab, setActiveTab] = useState(0);

	const tabButtons = wp.data.select('core/block-editor').getBlocks(blockProps.clientId)
		.find(block => block.name === 'create-block/tab-buttons-wrapper')?.innerBlocks || [];
	const tabContents = wp.data.select('core/block-editor').getBlocks(blockProps.clientId)
        .find(block => block.name === 'create-block/tab-content-wrapper')?.innerBlocks || [];

	return (
		<div { ...blockProps }>
			<div className='block'>
				<InspectorControls>
					<PanelBody title={__('Tabs settings', 'awesome')}>
						<p>{__('add or remove tab', 'awesome')}</p>
					</PanelBody>
				</InspectorControls>

				<div className="tab-buttons-wrapper">
					{tabButtons.map((buttonBlock, idx) => (
						<button
							key={buttonBlock.clientId}
							className={idx === activeTab ? 'active' : ''}
							onClick={() => setActiveTab(idx)}
							type="button"
						>
							{buttonBlock.attributes.title}
						</button>
					))}
					<InnerBlocks
						allowedBlocks={['create-block/tab-buttons-wrapper']}
						template={[['create-block/tab-buttons-wrapper']]}
						templateLock={false}
					/>
				</div>

				<div className="tab-content-wrapper">
					{tabContents.map((contentBlock, idx) => (
						<div
							key={contentBlock.clientId}
							className={`tab-content${idx === activeTab ? '' : ' hidden'}`}
						>
							<InnerBlocks
								clientId={contentBlock.clientId}
								templateLock={false}
							/>
						</div>
					))}
					<InnerBlocks
						allowedBlocks={['create-block/tab-content-wrapper']}
						template={[['create-block/tab-content-wrapper']]}
						templateLock={false}
					/>
				</div>
			</div>
		</div>
	);
}
