<?php


/**
 * Class to create a minified css output.
 */
class Premium_Blocks_css {

	/**
	 * The css selector that you're currently adding rules to
	 *
	 * @access protected
	 * @var string
	 */
	protected $_selector = '';

	/**
	 * Associative array of Google Fonts to load.
	 *
	 * Do not access this property directly, instead use the `get_google_fonts()` method.
	 *
	 * @var array
	 */
	protected static $google_fonts = array();

	/**
	 * Stores the final css output with all of its rules for the current selector.
	 *
	 * @access protected
	 * @var string
	 */
	protected $_selector_output = '';

	/**
	 * Can store a list of additional selector states which can be added and removed.
	 *
	 * @access protected
	 * @var array
	 */
	protected $_selector_states = array();



	/**
	 * Stores all of the rules that will be added to the selector
	 *
	 * @access protected
	 * @var string
	 */
	protected $_css = '';

	/**
	 * Stores all of the custom css.
	 *
	 * @access protected
	 * @var string
	 */
	protected $_css_string = '';

	/**
	 * The string that holds all of the css to output
	 *
	 * @access protected
	 * @var string
	 */
	protected $_output = '';

	/**
	 * Stores media queries
	 *
	 * @var null
	 */
	protected $_media_query = null;

	/**
	 * The string that holds all of the css to output inside of the media query
	 *
	 * @access protected
	 * @var string
	 */
	protected $_media_query_output = '';

	/**
	 * Sets a selector to the object and changes the current selector to a new one
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @param  string $selector - the css identifier of the html that you wish to target.
	 * @return $this
	 */
	public function set_selector( $selector = '' ) {
		// Render the css in the output string everytime the selector changes.
		if ( '' !== $this->_selector ) {
			$this->add_selector_rules_to_output();
		}
		$this->_selector = $selector;
		return $this;
	}
	/**
	 * Sets css string for final output.
	 *
	 * @param  string $string - the css string.
	 * @return $this
	 */
	public function add_css_string( $string ) {
		$this->_css_string .= $string;
		return $this;
	}

	/**
	 * Wrapper for the set_selector method, changes the selector to add new rules
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @see    set_selector()
	 * @param  string $selector the css selector.
	 * @return $this
	 */
	public function change_selector( $selector = '' ) {
		return $this->set_selector( $selector );
	}

	/**
	 * Adds a pseudo class to the selector ex. :hover, :active, :focus
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @param  $state - the selector state
	 * @param  reset - if true the        $_selector_states variable will be reset
	 * @return $this
	 */
	public function add_selector_state( $state, $reset = true ) {
		if ( $reset ) {
			$this->reset_selector_states();
		}
		$this->_selector_states[] = $state;
		return $this;
	}

	/**
	 * Adds multiple pseudo classes to the selector
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @param  array $states - the states you would like to add
	 * @return $this
	 */
	public function add_selector_states( $states = array() ) {
		$this->reset_selector_states();
		foreach ( $states as $state ) {
			$this->add_selector_state( $state, false );
		}
		return $this;
	}

	/**
	 * Removes the selector's pseudo classes
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @return $this
	 */
	public function reset_selector_states() {
		$this->add_selector_rules_to_output();
		if ( ! empty( $this->_selector_states ) ) {
			$this->_selector_states = array();
		}
		return $this;
	}

	/**
	 * Adds a new rule to the css output
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @param  string $property - the css property.
	 * @param  string $value - the value to be placed with the property.
	 * @param  string $prefix - not required, but allows for the creation of a browser prefixed property.
	 * @return $this
	 */
	public function add_rule( $property, $value, $prefix = null ) {
		$format = is_null( $prefix ) ? '%1$s:%2$s;' : '%3$s%1$s:%2$s;';
		if ( $value && ! empty( $value ) ) {
			$this->_css .= sprintf( $format, $property, $value, $prefix );
		}
		return $this;
	}



	/**
	 * Adds a css property with value to the css output
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @param  string $property - the css property
	 * @param  string $value - the value to be placed with the property
	 * @return $this
	 */
	public function add_property( $property, $value = null ) {
		if ( null === $value ) {
			return $this;
		}

			$this->add_rule( $property, $value );

		return $this;
	}

	/**
	 * Adds multiple properties with their values to the css output
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @param  array $properties - a list of properties and values
	 * @return $this
	 */
	public function add_properties( $properties ) {
		foreach ( (array) $properties as $property => $value ) {
			$this->add_property( $property, $value );
		}
		return $this;
	}

	/**
	 * Sets a media query in the class
	 *
	 * @since  1.1
	 * @param  string $value
	 * @return $this
	 */
	public function start_media_query( $value ) {
		// Add the current rules to the output
		$this->add_selector_rules_to_output();

		// Add any previous media queries to the output
		if ( $this->has_media_query() ) {
			$this->add_media_query_rules_to_output();
		}

		// Set the new media query
		$this->_media_query = $value;
		return $this;
	}

	/**
	 * Stops using a media query.
	 *
	 * @see    start_media_query()
	 *
	 * @since  1.1
	 * @return $this
	 */
	public function stop_media_query() {
		return $this->start_media_query( null );
	}

	/**
	 * Gets the media query if it exists in the class
	 *
	 * @since  1.1
	 * @return string|int|null
	 */
	public function get_media_query() {
		return $this->_media_query;
	}

	/**
	 * Checks if there is a media query present in the class
	 *
	 * @since  1.1
	 * @return boolean
	 */
	public function has_media_query() {
		if ( ! empty( $this->get_media_query() ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Adds the current media query's rules to the class' output variable
	 *
	 * @since  1.1
	 * @return $this
	 */
	private function add_media_query_rules_to_output() {
		if ( ! empty( $this->_media_query_output ) ) {
			$this->_output .= sprintf( '@media all and %1$s{%2$s}', $this->get_media_query(), $this->_media_query_output );

			// Reset the media query output string.
			$this->_media_query_output = '';
		}

		return $this;
	}

	/**
	 * Adds the current selector rules to the output variable
	 *
	 * @access private
	 * @since  1.0
	 *
	 * @return $this
	 */
	private function add_selector_rules_to_output() {
		if ( ! empty( $this->_css ) ) {
			$this->prepare_selector_output();
			$selector_output = sprintf( '%1$s{%2$s}', $this->_selector_output, $this->_css );

			if ( $this->has_media_query() ) {
				$this->_media_query_output .= $selector_output;
				$this->reset_css();
			} else {
				$this->_output .= $selector_output;
			}

			// Reset the css.
			$this->reset_css();
		}

		return $this;
	}

	public function render_color( $color, $opacity = null ) {
		if ( empty( $color ) || 'px' === $color || 'Default' === $color ) {
			return false;
		}
		return $color;
	}

	/**
	 * Prepares the $_selector_output variable for rendering
	 *
	 * @access private
	 * @since  1.0
	 *
	 * @return $this
	 */
	private function prepare_selector_output() {
		if ( ! empty( $this->_selector_states ) ) {
			// Create a new variable to store all of the states.
			$new_selector = '';

			foreach ( (array) $this->_selector_states as $state ) {
				$format        = end( $this->_selector_states ) === $state ? '%1$s%2$s' : '%1$s%2$s,';
				$new_selector .= sprintf( $format, $this->_selector, $state );
			}
			$this->_selector_output = $new_selector;
		} else {
			$this->_selector_output = $this->_selector;
		}
		return $this;
	}

	/**
	 * Generates the font family output.
	 *
	 * @param array $font an array of font settings.
	 * @return string
	 */


	/**
	 * Generates the font family output.
	 *
	 * @param array $font an array of font settings.
	 * @return string
	 */
	public function render_font_weight( $weight ) {
		if ( empty( $weight ) ) {
			return false;
		}
		if ( 'regular' === $weight ) {
			$weight_string = 'normal';
		} else {
			$weight_string = $weight;
		}
		return $weight_string;
	}

	/**
	 * Generates the font output.
	 *
	 * @param array  $font an array of font settings.
	 * @param object $css an object of css output.
	 * @param string $inherit an string to determine if the font should inherit.
	 * @return string

	/**
	 * Generates the font height output.
	 *
	 * @param array  $font an array of font settings.
	 * @param string $device the device this is showing on.
	 * @return string
	 */
	public function render_font_height( $font, $device ) {
		if ( empty( $font ) ) {
			return false;
		}
		if ( ! is_array( $font ) ) {
			return false;
		}
		if ( ! isset( $font['lineHeight'] ) ) {
			return false;
		}
		if ( ! is_array( $font['lineHeight'] ) ) {
			return false;
		}
		if ( ! isset( $font['lineHeight'][ $device ] ) ) {
			return false;
		}
		if ( empty( $font['lineHeight'][ $device ] ) ) {
			return false;
		}
		$font_string = $font['lineHeight'][ $device ] . ( isset( $font['lineType'] ) && ! empty( $font['lineType'] ) ? $font['lineType'] : 'px' );

		return $font_string;
	}
	/**
	 * Outputs a string if set.
	 *
	 * @param array  $string a string setting.
	 * @param string $unit if needed add unit.
	 * @return string
	 */
	public function render_string( $string = null, $unit = null ) {
		if ( empty( $string ) ) {
			return false;
		}
		$string = $string . ( isset( $unit ) && ! empty( $unit ) ? $unit : '' );

		return $string;
	}
	/**
	 * Outputs a string if set.
	 *
	 * @param array  $number a string setting.
	 * @param string $unit if needed add unit.
	 * @return string
	 */
	public function render_number( $number = null, $unit = null ) {
		if ( ! is_numeric( $number ) ) {
			return false;
		}
		$number = $number . ( isset( $unit ) && ! empty( $unit ) ? $unit : '' );

		return $number;
	}


	/**
	 * Generates the size output.
	 *
	 * @param array  $size an array of size settings.
	 * @param string $device the device this is showing on.
	 * @param bool   $render_zero if 0 should be rendered or not.
	 * @return string
	 */
	public function render_range( $size, $device, $render_zero = true ) {
		if ( empty( $size ) ) {
			return false;
		}
		if ( ! is_array( $size ) ) {
			return false;
		}
		if ( ! isset( $size['size'] ) ) {
			return false;
		}
		if ( ! is_array( $size['size'] ) ) {
			return false;
		}
		if ( ! isset( $size['size'][ $device ] ) ) {
			return false;
		}
		if ( $render_zero ) {
			if ( ! is_numeric( $size['size'][ $device ] ) ) {
				return false;
			}
		} else {
			if ( empty( $size['size'][ $device ] ) ) {
				return false;
			}
		}
		$size_type   = ( isset( $size['unit'] ) && is_array( $size['unit'] ) && isset( $size['unit'][ $device ] ) && ! empty( $size['unit'][ $device ] ) ? $size['unit'][ $device ] : 'px' );
		$size_string = $size['size'][ $device ] . $size_type;

		return $size_string;
	}


	/**
	 * Add google font to array.
	 *
	 * @param string $font_name the font name.
	 * @param string $variant the font variant.
	 * @param string $subset the font subset.
	 */
	public function maybe_add_google_font( $font_name, $font_variant = null, $subset = null ) {
		// Check if the font has been added yet.
		if ( ! array_key_exists( $font_name, self::$google_fonts ) ) {
			$add_font                         = array(
				'fontfamily'   => $font_name,
				'fontvariants' => ( isset( $font_variant ) && ! empty( $font_variant ) ? array( $font_variant ) : array() ),
				'fontsubsets'  => ( isset( $subset ) && ! empty( $subset ) ? array( $subset ) : array() ),
			);
			self::$google_fonts[ $font_name ] = $add_font;
		} else {
			if ( ! in_array( $font_variant, self::$google_fonts[ $font_name ]['fontvariants'], true ) ) {
				array_push( self::$google_fonts[ $font_name ]['fontvariants'], $font_variant );
			}
		}
	}

	/**
	 * Resets the css variable
	 *
	 * @access private
	 * @since  1.1
	 *
	 * @return void
	 */
	private function reset_css() {
		$this->_css = '';
		return;
	}

	/**
	 * Returns the google fonts array from the compiled css.
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @return string
	 */
	public function fonts_output() {
		return self::$google_fonts;
	}

	/**
	 * Returns the minified css in the $_output variable
	 *
	 * @access public
	 * @since  1.0
	 *
	 * @return string
	 */
	public function css_output() {
		// Add current selector's rules to output
		$this->add_selector_rules_to_output();

		$this->_output .= $this->_css_string;

		// Output minified css
		return $this->_output;
	}

}
