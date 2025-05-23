<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div id="menuToggle"<?php echo get_block_wrapper_attributes(); ?>>
	<div class="burger-menu">
		<span></span>
		<span></span>
		<span></span>
	</div>

	<div class="menu hidden">
		<div class="close-menu hidden">
			<span></span>
			<span></span>
		</div>
		<ul>
			<?php
				$menu_name = isset($attributes['menuSlug']) ? $attributes['menuSlug'] : '';
				wp_nav_menu(array(
                    'menu' => $menu_name, // Use the menu name
                    'container' => false,
                    'items_wrap' => '%3$s',
                    'fallback_cb' => false,
                    'walker' => new Custom_Walker_Nav_Menu(),
                ));
				
			?>
		</ul>
	</div>
</div>

<script>
	document.addEventListener('DOMContentLoaded', function () {
		const menuToggle = document.querySelector('.burger-menu');
		const menu = document.querySelector('.menu');
		const closeMenu = document.querySelector('.close-menu');

		menuToggle.addEventListener('click', function () {
			menu.classList.toggle('hidden');
			closeMenu.classList.toggle('hidden');
		})

		closeMenu.addEventListener('click', function () {
			menu.classList.toggle('hidden');
			closeMenu.classList.toggle('hidden');
		})

		const submenuToggles = document.querySelectorAll('.menu-item-has-children > svg');
		submenuToggles.forEach(toggle => {
			toggle.addEventListener('click', function (e) {
				e.preventDefault();
				const parent = this.parentElement;
				parent.classList.toggle('open');
			})
		})
	})
</script>