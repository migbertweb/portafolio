<?php

/**
 * This file is part of the "laravel-lang/publisher" project.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Andrey Helldar <helldar@dragon-code.pro>
 * @copyright 2023 Laravel Lang Team
 * @license MIT
 *
 * @see https://laravel-lang.com
 */

declare(strict_types=1);

use LaravelLang\Publisher\Constants\Locales;

return [
    /*
     * Determines what type of files to use when updating language files.
     *
     * `true` means inline files will be used.
     * `false` means that default files will be used.
     *
     * For example, the difference between them can be seen here:
     *
     * The :attribute must be accepted. // default
     * This field must be accepted.     // inline
     *
     * By default, `false`.
     */

    'inline' => false,

    /*
     * Do arrays need to be aligned by keys before processing arrays?
     *
     * By default, true
     */

    'align' => true,

    /*
     * This option determines the mechanism for converting translation
     * keys into a typographic version.
     *
     * For example:
     *   for `false`:
     *     "It's super-configurable... you can even use additional extensions to expand its capabilities -- just like this one!"
     *   for `true`:
     *     “It’s super-configurable… you can even use additional extensions to expand its capabilities – just like this one!”
     *
     * By default, false
     */

    'smart_punctuation' => [
        'enable' => false,

        'common' => [
            'double_quote_opener' => '“',
            'double_quote_closer' => '”',
            'single_quote_opener' => '‘',
            'single_quote_closer' => '’',
        ],

        'locales' => [
            Locales::FRENCH->value => [
                'double_quote_opener' => '«&nbsp;',
                'double_quote_closer' => '&nbsp;»',
                'single_quote_opener' => '‘',
                'single_quote_closer' => '’',
            ],

            Locales::RUSSIAN->value => [
                'double_quote_opener' => '«',
                'double_quote_closer' => '»',
                'single_quote_opener' => '‘',
                'single_quote_closer' => '’',
            ],

            Locales::UKRAINIAN->value => [
                'double_quote_opener' => '«',
                'double_quote_closer' => '»',
                'single_quote_opener' => '‘',
                'single_quote_closer' => '’',
            ],

            Locales::BELARUSIAN->value => [
                'double_quote_opener' => '«',
                'double_quote_closer' => '»',
                'single_quote_opener' => '‘',
                'single_quote_closer' => '’',
            ],
        ],
    ],

    /*
     * The language codes chosen for the files in this repository may not
     * match the preferences for your project.
     *
     * Specify here mappings of localizations with your project.
     */

    'aliases' => [
        // \LaravelLang\Publisher\Constants\Locales::GERMAN->value => 'de-DE',
        //
        // \LaravelLang\Publisher\Constants\Locales::GERMAN_SWITZERLAND->value => 'de-CH',
    ],

    /*
     * This option contains a list of translators that the Laravel Lang Translator project works with.
     *
     * Google Translate is enabled by default.
     *
     * @see https://laravel-lang.com/configuration.html#translators
     */

    'translators' => [
        /*
         * List of channels used for translations.
         *
         * By default,
         *
         *     Google is enabled
         *     Deepl  is disabled
         *     Yandex is disabled
         */

        'channels' => [
            'google' => [
                'translator' => '\LaravelLang\Translator\Integrations\Google',

                'enabled' => (bool) env('TRANSLATION_GOOGLE_ENABLED', true),
                'priority' => (int) env('TRANSLATION_GOOGLE_PRIORITY', 1),
            ],

            'deepl' => [
                'translator' => '\LaravelLang\Translator\Integrations\Deepl',

                'enabled' => (bool) env('TRANSLATION_DEEPL_ENABLED', false),
                'priority' => (int) env('TRANSLATION_DEEPL_PRIORITY', 2),

                'credentials' => [
                    'key' => (string) env('TRANSLATION_DEEPL_KEY'),
                ],
            ],

            'yandex' => [
                'translator' => '\LaravelLang\Translator\Integrations\Yandex',

                'enabled' => (bool) env('TRANSLATION_YANDEX_ENABLED', false),
                'priority' => (int) env('TRANSLATION_YANDEX_PRIORITY', 3),

                'credentials' => [
                    'key' => (string) env('TRANSLATION_YANDEX_KEY'),
                    'folder' => (string) env('TRANSLATION_YANDEX_FOLDER_ID'),
                ],
            ],
        ],

        'options' => [
            /*
             * Set a custom pattern for extracting replaceable keywords from the string,
             * default to extracting words prefixed with a colon.
             *
             *  Available options:
             *
             *     `true` is a `/:(\w+)/`
             *     `false` will disable regular expression processing
             *      `/any regex/` - any regular expression you specify
             *
             *   By default, `true`
             *
             * @example (e.g. "Hello :name" will extract "name")
             */

            'preserve_parameters' => true,
        ],
    ],

];
