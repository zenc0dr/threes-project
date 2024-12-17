<?php namespace Zen\Robots\Controllers;

use Illuminate\Support\Facades\Request;
use Zen\Robots\Models\Settings;

class Generate
{
    public static function robots()
    {
        $domain = self::getDomain();
        $content = Settings::get('content');
        $content = str_replace('$domain', $domain, $content);
        return $content;
    }

    public static function getDomain ()
    {
        if (Request::isSecure())
        {
            return 'https://'.Request::getHttpHost();
        } else {
            return 'http://'.Request::getHttpHost();
        }
    }
}