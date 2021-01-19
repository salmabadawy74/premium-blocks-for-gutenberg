import Slider from "react-slick"; 

class TestCarousel extends React.Component{
    constructor() {
        super(...arguments);
      }
      render(){
      const settings = {
        dots: true,
        centerMode: true,
        centerPadding: 4,
        infinite: true,
        autoplay: true,
        speed: 5000,
        slidesToShow: 2,
        
      };
      return(
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    
      );
    }
} 
export default TestCarousel;