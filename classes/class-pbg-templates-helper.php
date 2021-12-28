<?php
if ( ! defined('ABSPATH' ) ) {
    exit();
}
/**
 * Define PBG_Template_Helper class
 */
class PBG_Template_Helper {
    /**
     * Class instance
     *
     * @var instance
     */
    private static $instance = null;
    /**
     * Constructor for the class
     */
    public function __construct() {

        add_action( 'wp_ajax_pbg-block-templates', array( $this, 'ajax_import_templates' ) );   
        add_action( 'wp_ajax_true', array( $this, 'ajax_import_templates_reset' ) );   
        
    }

    public function get_cached_templates() {

        $dir        = PREMIUM_BLOCKS_PATH . 'src/blocks/template/json';

        $list_files = $this->get_default_assets();
        
        foreach ( $list_files as $key => $file_name ) {

            if ( file_exists( $dir . '/' . $file_name . '.json' ) ) {

                $data = $this->ast_block_templates_get_filesystem()->get_contents( $dir . '/' . $file_name . '.json' );

                if ( ! empty( $data ) ) {

                    update_site_option( $file_name, $data );

                    $this->get_upload_dir($data);

                    return $data;
                }
            }
        }
    }

    /**
     * Import category
     *
     * @since 1.0.0
     * @return void
     */
    public function ajax_import_templates() {

        $cache = get_transient('pbg_get_template');

        if( ! $cache ) {

            $category = $this->get_remote_templates();

        } else {

            $category = $this->get_cached_templates();
            
        }
        
            
        wp_send_json_success( $category );
    }

    public function ajax_import_templates_reset() {

        // $cache = get_transient('pbg_get_template');

        // if( ! $cache ) {

            $category = $this->get_remote_templates();

        // } else {

            // $category = $this->get_cached_templates();
            
        // }
        
            
        wp_send_json_success( $category );
    }


    public function get_remote_templates() {

        $response = wp_remote_get( 'https://d3gt1urn7320t9.cloudfront.net' . '/library-v3/library.json' );

        $content = wp_remote_retrieve_body( $response );

        $all_templates =  str_replace("\r\n",'', $content);

        //write json to file
        $dir =  PREMIUM_BLOCKS_PATH . 'src/blocks/template/json/pbg-block-templates.json';

        if (file_put_contents($dir , $all_templates)) {

            $this->get_upload_dir($all_templates);

            set_transient('pbg_get_template', true, 1 * MINUTE_IN_SECONDS );

            return $all_templates;
        } else {

            echo "Oops! Error creating json file...";

        }
            
    }

    /**
     * Json Files Names.
     *
     * @since 1.0.1
     * @return array
     */
    public function get_default_assets() {

        return array(
            'pbg-block-templates',
        );

    }

    /**
     * Get an instance of WP_Filesystem_Direct.
     *
     * @since 1.0.0
     * @return object A WP_Filesystem_Direct instance.
     */
    function ast_block_templates_get_filesystem() {

        global $wp_filesystem;

        require_once ABSPATH . '/wp-admin/includes/file.php';

        WP_Filesystem();

        return $wp_filesystem;

    }

    /**
     * Returns an array of paths for the upload directory
     * of the current site.
     *
     * @since 1.14.0
     * @return array
     */
    public static function get_upload_dir($data) {

        $upload = wp_upload_dir();

        $upload_dir = $upload_dir . '/pbgTemplate';

        // Build the paths.
        $dir_info = array(
            'path' => trailingslashit( trailingslashit( $upload['basedir'] ) . $upload_dir ),
            'url'  => trailingslashit( trailingslashit( $upload['baseurl'] ) . $upload_dir ),
        );

        // Create the upload dir if it doesn't exist.
        if ( ! file_exists( $dir_info['path'] ) ) {
            // Create the directory.
            $wp_filesystem = uagb_filesystem();

            $wp_filesystem->mkdir( $dir_info['path'] );

            // Add an index file for security.
            $wp_filesystem->put_contents( $dir_info['path'] . 'template.json', $data, FS_CHMOD_FILE );
        }
    }

    /**
     * Creates and returns an instance of the class
     *
     * @since 1.0.0
     * @access public
     *
     * @return object
     */
    public static function get_instance() {

        if ( ! isset( self::$instance ) ) {

            self::$instance = new self();

        }

        return self::$instance;
    }

}
if ( ! function_exists( 'pbg_template_helper' ) ) {
    /**
     * Returns an instance of the plugin class.
     *
     * @since  1.0.0
     * @return object
     */
    function pbg_template_helper() {

        return pbg_template_helper::get_instance();

    }
}

pbg_template_helper();