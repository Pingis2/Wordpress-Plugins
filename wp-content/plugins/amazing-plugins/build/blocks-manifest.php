<?php
// This file is generated. Do not modify it manually.
return array(
	'awesome' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/awesome',
		'version' => '0.1.0',
		'title' => 'Awesome',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'awesome',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'tab-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/tab-block',
		'version' => '0.1.0',
		'title' => 'Tab Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'innerBlocks' => true,
			'align' => true,
			'anchor' => true
		),
		'attributes' => array(
			'tabs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Tab 1'
					),
					array(
						'title' => 'Tab 2'
					)
				)
			),
			'activeTab' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'textdomain' => 'tab-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
