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
     * Blocks
     *
     * @var template
     */
    public static $template;
    /**
     * Config
     *
     * @var config
     */
    public static $config;
    /**
     * Stylesheet
     *
     * @since 1.13.4
     * @var stylesheet
     */
    public static $stylesheet;
    /**
     * Page Templates Variable
     *
     * @since 1.6.0
     * @var instance
     */
    public static $page_template;
    /**
     * Member Variable
     *
     * @since 0.0.1
     * @var instance
     */
    public static $block_atts;
    /**
     * PBG Block Flag
     *
     * @since 1.8.2
     * @var premium_flag
     */
    public static $premium_flag = false;
    /**
     * Current Block List
     *
     * @since 1.8.2
     * @var current_block_list
     */
    public static $current_block_list = array();
    /**
     * Constructor for the class
     */
    public function __construct() {
        // Gets Active Blocks.
        // self::$blocks = PBG_Admin::get_enabled_keys();
        // Gets Plugin Admin Settings.
        // self::$config = PBG_Settings::get_enabled_keys();
        add_action( 'wp_ajax_pbg-block-templates-import-category', array( $this, 'ajax_import_category' ) );
        add_action( 'admin_head', array( $this, 'setup_templates' ) );
        add_filter( 'upload_mimes', array( $this, 'custom_upload_mimes' ) );
    }

    /**
		 * Add .json files as supported format in the uploader.
		 *
		 * @param array $mimes Already supported mime types.
		 */
		public function custom_upload_mimes( $mimes ) {

			// Allow JSON files.
			$mimes['json'] = 'application/json';

			return $mimes;
		}

    public function setup_templates() {
        // $this->process_sync();
        // $this->_get_design_library();
        
        // echo PREMIUM_BLOCKS_TEMPLATE_PATH;
        // $current_screen = get_current_screen();
        $dir        = PREMIUM_BLOCKS_PATH . 'src/blocks/template/json';
        // echo $dir;
        $list_files = $this->get_default_assets();
        foreach ( $list_files as $key => $file_name ) {
            if ( file_exists( $dir . '/' . $file_name . '.json' ) ) {
                // echo $dir . '/' . $file_name . '.json';
                $data = $this->ast_block_templates_get_filesystem()->get_contents( $dir . '/' . $file_name . '.json' );
                // echo $data;
                if ( ! empty( $data ) ) {
                    update_site_option( $file_name, $data );
                    $this->get_upload_dir();
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
        public function ajax_import_category() {
            // $page_no = isset( $_POST[‘page_no’] ) ? absint( $_POST[‘page_no’] ) : ‘’; // phpcs:ignore WordPress.Security.NonceVerification.Missing
            // if ( $page_no ) {
             $category = $this->_get_design_library( );
             wp_send_json_success( $category);
            // wp_send_json_error(
            //  array(
            //      'message' => 'Failed imported categories',
            //      'status'  => false,
            //      'data'    => '',
            //  )
            // );
        }

        public function _get_design_library() {
            // echo PREMIUM_BLOCKS_PATH;
            // $designs = get_transient( ‘stackable_get_design_library_v3’ );
            // Fetch designs.
            // if ( empty( $designs ) ) {
                $response = wp_remote_get( 'https://d3gt1urn7320t9.cloudfront.net' . '/library-v3/library.json' );
                // echo $response;
                $content = wp_remote_retrieve_body( $response );
                // We add the latest designs in the `v3` area.
				// $designs = json_decode( $content, true );
                // if ( ! is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) === 200 ) {
                    // $all_templates =  json_encode(array('v3' => $content));
                    $all_templates =  str_replace("\r\n",'', $content);
        
                        //write json to file
                        $dir =  PREMIUM_BLOCKS_PATH . 'src/blocks/template/json/pbg-block-templates.json';
                        if (file_put_contents($dir , $all_templates))
                            // echo "JSON file created successfully...";
                            return $all_templates;
                        else 
                            echo "Oops! Error creating json file...";
                    // if ( isset( $all_templates['code'] ) ) {
                    //     $message = isset( $all_templates['message'] ) ? $all_templates['message'] : '';
                    //     if ( ! empty( $message ) ) {
                    //         ast_block_templates_log( 'CATEGORY:HTTP Request Error: ' . $message );
                    //     } else {
                    //         ast_block_templates_log( 'CATEGORY:HTTP Request Error!' );
                    //     }
                    // } else {
    
                        // $option_name = 'pbg-block-templates';
                    //     ast_block_templates_log( 'CATEGORY:Storing in option ' . $option_name );
    
                        // update_site_option( $option_name, $all_templates, 'no' );
    
                    //     do_action( 'ast_block_templates_sync_categories', $all_templates );
    
                    //     if ( ast_block_templates_doing_wp_cli() ) {
                    //         ast_block_templates_log( 'CATEGORY:Generating ' . $option_name . '.json file' );
                    //     }
                    // }
                // }
                //  else {
                //     // ast_block_templates_log( 'CATEGORY:API Error: ' . $response->get_error_message() );
                // }
                // $content = wp_remote_retrieve_body( $response );
                // $content = apply_filters( ‘stackable_design_library_retreive_body’, $content );
                // // We add the latest designs in the `v3` area.
                // $designs = array(
                //  v3 => json_decode( $content, true ),
                // );
                // // Allow deprecated code to fetch other designs
                // $designs = apply_filters( ‘stackable_fetch_design_library’, $designs );
                // // Cache results.
                // set_transient( ‘stackable_get_design_library_v3’, $designs, DAY_IN_SECONDS );
            // }
            // return apply_filters( 'stackable_design_library', $designs );
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
		public static function get_upload_dir() {

			$upload = wp_upload_dir();
    $upload_dir = $upload['basedir'];
    $upload_dir = $upload_dir . '/pbgTemplate';
    if (! is_dir($upload_dir)) {
       mkdir( $upload_dir, 0700 );
       $filename = 'Templates';
    //    $filename = basename($_FILES['Attach_Files']['name']);
       $filetype = 'json';
       $datei = "files/standard/{$projID}/{$filename}";
       $target_path = $upload_dir . "/" . $filename;
        //    if(move_uploaded_file($_FILES['Attach_Files']['tmp_name'], $target_path)) {
        //    mysql_query("INSERT INTO files (files.name, files.project, files.user, files.added, files.datei, files.type, files.folder, files.visible) VALUES('{$filename}', '{$projID}', 5, UNIX_TIMESTAMP(now()), '{$datei}', '{$filetype}', 0, ' ')");
        //    }
        chmod("{$target_path}", 0755);
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