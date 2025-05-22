<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>


<p <?php echo get_block_wrapper_attributes(); ?>>
	<div class="block">
		<div class="tab-buttons">
		<?php
            $tabs = isset($attributes['tabs']) ? $attributes['tabs'] : [];
            $activeTab = 0;

            foreach ($tabs as $index => $tab) {
                $activeClass = $index === $activeTab ? 'active' : '';
                echo sprintf(
                    '<button class="tab-button %s" data-tab-index="%d">%s</button>',
                    esc_attr($activeClass),
                    esc_attr($index),
                    esc_html($tab['title'])
                );
            }
            ?>
		</div>
		<div class="tab-content">
			<?php
            // Render the tab content
            foreach ($tabs as $index => $tab) {
                $hiddenClass = $index === $activeTab ? '' : 'hidden';
                echo sprintf(
                    '<div class="tab-content-item %s" data-tab-index="%d"><p>%s</p></div>',
                    esc_attr($hiddenClass),
                    esc_attr($index),
                    esc_html($tab['content'])
                );
                if ($index === $activeTab) {
                    echo $content;
                }
            }
            ?>

		</div>
	</div>
</p>

<script>
	document.addEventListener('DOMContentLoaded', function () {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content-item');

        tabButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const tabIndex = this.getAttribute('data-tab-index');

                // Remove active class from all buttons and hide all content
                tabButtons.forEach((btn) => btn.classList.remove('active'));
                tabContents.forEach((content) => content.classList.add('hidden'));

                // Add active class to the clicked button and show the corresponding content
                this.classList.add('active');
                document
                    .querySelector(`.tab-content-item[data-tab-index="${tabIndex}"]`)
                    .classList.remove('hidden');
            });
        });
    });
</script>