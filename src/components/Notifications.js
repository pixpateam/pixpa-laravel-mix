let AutomaticComponent = require('./AutomaticComponent');

class Notifications extends AutomaticComponent {
    /**
     * webpack plugins to be appended to the master config.
     */
    webpackPlugins() {
        if (Mix.isUsing('notifications')) {
            let WebpackNotifierPlugin = require('webpack-notifier');

            return new WebpackNotifierPlugin({
                appID: 'Laravel Mix',

                title: 'Laravel Mix',
                alwaysNotify: Config.notifications.onSuccess,
                hint:
                    process.platform === 'linux'
                        ? 'int:transient:1'
                        : undefined,
                contentImage: Mix.paths.root(
                    'node_modules/pixpa-laravel-mix/icons/laravel.png'
                )
            });
        }
    }
}

module.exports = Notifications;
