import classnames from 'classnames'
import { filterJsCss, gradientBackground } from '@pbg/helpers';

const { InnerBlocks, useBlockProps } = wp.blockEditor;
import Slider from "react-slick";

const save = props => {

    const { className } = props;



    return (
        <Slider>

            <InnerBlocks.Content />
        </Slider>
    );
};

export default save;