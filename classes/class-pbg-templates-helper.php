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
        $this->_get_design_library();
        // $current_screen = get_current_screen();
        $dir        = PREMIUM_BLOCKS_URL . 'src/blocks/template/json';
        echo $dir;
        // $list_files = $this->get_default_assets();
        // foreach ( $list_files as $key => $file_name ) {
        //     if ( file_exists( $dir . '/' . $file_name . '.json' ) ) {
        //         echo $dir . '/' . $file_name . '.json';
        //         $data = $this->ast_block_templates_get_filesystem()->get_contents( $dir . '/' . $file_name . '.json' );
        //         if ( ! empty( $data ) ) {
        //             update_site_option( $file_name, json_decode( $data, true ) );
        //         }
        //     }
        // }
        $array = Array (
            "0" => Array (
                "id" => "MMZ301",
                "name" => "Michael Bruce",
                "designation" => "System Architect"
            ),
            "1" => Array (
                "id" => "MMZ385",
                "name" => "Jennifer Winters",
                "designation" => "Senior Programmer"
            ),
            "2" => Array (
                "id" => "MMZ593",
                "name" => "Donna Fox",
                "designation" => "Office Manager"
            )
        );
        
        // encode array to json
        // $json = json_encode(array('data' => $array));
        
        // //write json to file
        // if (file_put_contents('D:\new\htdocs\new\wp-content\plugins\premium-blocks-for-gutenberg\src\blocks\template\json\pbg-block-templates.json', $json))
        //     echo "JSON file created successfully...";
        // else 
        //     echo "Oops! Error creating json file...";
    }
    /**
         * Process Import
         *
         * @since 1.0.6
         *
         * @return mixed Null if process is already started.
         */
        public function process_sync() {
            // Check if last sync and this sync has a gap of 24 hours.
            // $last_check_time = get_site_option( ‘ast-block-templates-last-export-checksums-time’, 0 );
            // if ( ( time() - $last_check_time ) < 86400 ) {
            //  return;
            // }
            $current_screen = get_current_screen();
echo $current_screen;
            // Bail if not on Blok editor screen.
            // if ( true !== $current_screen->is_block_editor ) {
            //  return;
            // }
            // Process sync.
            // if ( ‘yes’ === $this->get_last_export_checksums() ) {
            //  add_action( ‘shutdown’, array( $this, ‘auto_sync’ ) );
            // }
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
            //  $category = $this->import_category( $page_no );
            //  wp_send_json_success(
            //      array(
            //          ‘message’ => ‘Success imported categories for page ' . $page_no,
            //          ‘status’  => true,
            //          ‘data’    => $category,
            //      )
            //  );
            // }
            // wp_send_json_error(
            //  array(
            //      ‘message’ => ‘Failed imported categories for page ' . $page_no,
            //      ‘status’  => false,
            //      ‘data’    => ‘’,
            //  )
            // );
        }
        /**
         * Import category
         *
         * @since 1.0.0
         * @param  integer $page Page number.
         * @return void
         */
        public function import_category( $page = 1 ) {
            register_rest_route( 'stackable/v2', '/design_library(?:/(?P<reset>reset))?', array(
                'methods' => 'GET',
                'callback' => array( $this, '_get_design_library' ),
                'permission_callback' => function () {
                    return current_user_can( 'edit_posts' );
                },
                'args' => array(
                    'reset' => array(
                        'validate_callback' => __CLASS__ . '::validate_string'
                    ),
                ),
            ) );
//          $block = (array) $block;
//      $name     = $block[‘blockName’];
//      $css      = array();
//      $block_id = ‘’;
//      $blockattr = $block[‘attrs’];
//      // $blockattr[‘template’]
// echo $blockattr[‘template’];
            // ast_block_templates_log( ‘BLOCK: Importing request ' . $page . ' ..' );
            // $api_args   = array(
            //  ‘timeout’ => 30,
            // );
            // $all_blocks = array();
            // $query_args = apply_filters(
            //  ‘pbg_block_templates_blocks_args’,
            //  array(
            //      ‘page_builder’ => ‘gutenberg’,
            //      ‘per_page’     => 100,
            //      ‘page’         => $page,
            //      ‘wireframe’    => ‘yes’,
            //  )
            // );
        //     $email = isset( $_POST[‘email’] ) ? $_POST[‘email’] : ‘’;
        //  $api_url = add_query_arg( array(
        //  ), ‘http://localhost:8080/new/index.php?rest_route=%2Fstackable%2Fv2%2Fdesign_library&_locale=user’ );
        //     echo $api_url;
        //  // ast_block_templates_log( ‘BLOCK: ' . $api_url );
        //     $response = wp_remote_get( $api_url, $api_args );
        //     $body = wp_remote_retrieve_body( $response );
        // $body = json_decode( $body, true );
        //     echo $body;
            // if ( ! is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) === 200 ) {
            //  $all_blocks = json_decode( wp_remote_retrieve_body( $response ), true );
            //  if ( isset( $all_blocks[‘code’] ) ) {
            //      $message = isset( $all_blocks[‘message’] ) ? $all_blocks[‘message’] : ‘’;
            //      if ( ! empty( $message ) ) {
            //          ast_block_templates_log( ‘BLOCK: HTTP Request Error: ' . $message );
            //      } else {
            //          ast_block_templates_log( ‘BLOCK: HTTP Request Error!' );
            //      }
            //  } else {
            //      $option_name = ‘ast-block-templates-blocks-' . $page;
            //      ast_block_templates_log( ‘BLOCK: Storing in option ' . $option_name );
            //      update_site_option( $option_name, $all_blocks, ‘no’ );
            //      if ( ast_block_templates_doing_wp_cli() ) {
            //          do_action( ‘ast_block_templates_sync_blocks’, $page, $all_blocks );
            //          ast_block_templates_log( ‘BLOCK: Genearting ' . $option_name . '.json file’ );
            //      }
            //  }
            // } else {
            //  ast_block_templates_log( ‘BLOCK: API Error: ' . $response->get_error_message() );
            // }
            // ast_block_templates_log( ‘BLOCK: Completed request ' . $page );
        }

        public function get_design_library( $request ) {
            return  $this->_get_design_library() ;
        }

        public function _get_design_library() {
            echo 'jjjjj';
            // $designs = get_transient( ‘stackable_get_design_library_v3’ );
            // Fetch designs.
            // if ( empty( $designs ) ) {
                $response = wp_remote_get( 'https://d3gt1urn7320t9.cloudfront.net' . '/library-v3/library.json' );
                // echo $response;
                $content = wp_remote_retrieve_body( $response );
                // We add the latest designs in the `v3` area.
				$designs = json_decode( $content, true );
                // if ( ! is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) === 200 ) {
                    $all_templates =  json_encode(array('v3' => $content));
                    $all_templates =  preg_replace('!\\r?\\n!', "", $all_templates);
                        // $dir        = PREMIUM_BLOCKS_URL . 'src/blocks/template/json';
                        // $json = json_encode(array('data' => $array));
        
                        //write json to file
                        if (file_put_contents('D:\new\htdocs\new\wp-content\plugins\premium-blocks-for-gutenberg\src\blocks\template\json\pbg-block-templates.json', $all_templates))
                            echo "JSON file created successfully...";
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
    
                    //     $option_name = 'pbg-block-templates';
                    //     ast_block_templates_log( 'CATEGORY:Storing in option ' . $option_name );
    
                    //     update_site_option( $option_name, $all_templates, 'no' );
    
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