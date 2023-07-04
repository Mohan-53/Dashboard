import React from 'react';
import logo from "../Images/logo.png";
import cardImg1 from "../Images/card-img/20210423_164747_540x.png";
import cardImg2 from "../Images/card-img/Alonso_-_DTB_-_FB_540x.png";
import cardImg3 from "../Images/card-img/CLEANING_CONNOR_540x.jpg";
import cardImg4 from "../Images/card-img/Glove_restring_2_540x.png";
import cardImg5 from "../Images/card-img/Hockey_-_Web_Site_540x.png";
import product2 from "../Images/products/42a0c437f0a11a44d0875cd86a4bf60a_360x.jpg";
import product10 from "../Images/products/8341eb258f616d85f0e71bce589adc3b_5c39c6d2-24a7-4313-bc64-9e4c2aa1762e_300x300.jpg"
import product3 from "../Images/products/488a3790085c69335b436ac2cb87a2c4_5de61a9c-d701-472e-b321-87e250cd46be_360x360.jpg";
import partner1 from "../Images/partners-img/Central_Ma_Revs_160x160@2x.jpg";
import partner2 from "../Images/partners-img/Demons_Youth_Hockey_160x160@2x.avif";
import partner3 from "../Images/partners-img/Franklin_Youth_Hockey_160x160@2x.avif";
import partner4 from "../Images/partners-img/Griffin_Youth_Hockey_160x160@2x.avif";
import partner5 from "../Images/partners-img/Jr_Crusaders_160x160@2x.avif";
import partner6 from "../Images/partners-img/Jr_Railers_160x160@2x.avif";
import partner7 from "../Images/partners-img/NCM_Youth_Hockey_160x160@2x.avif";
import partner8 from "../Images/partners-img/TY_Cobb_Little_League_160x160@2x.avif";
import partner9 from "../Images/partners-img/Triboro_Youth_Hockey_160x160@2x.avif";
import SlideImageOne from "../Images/SlideOne.jpg";
import SlideImageTwo from "../Images/Web_Site_Baseball_Banner_1950x.png";
import SlideImageThree from "../Images/Web_Site_Goalie_Banner_1950x.png";
import SlideImageFour from "../Images/Website_-_skates_page_1950x.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export const Dashboard = () => {

  return (
    <div>
      <div class="announcement-bar">
        <p class="announcement-bar__message">We are now hiring! Please send your
          information to customer_service@kleennhardsports.com</p>
      </div>
      <nav class="navbar navbar-expand-md sticky-top bg border-bottom">
        <div class="container">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={logo} alt="" class="image" /></a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Trade Program </a></li>
            <li class="nav-item"><a href="#" class="nav-link">Gift Cards</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Professional Gear Cleaning</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Hockey</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Baseball and Softball</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Lacrosse</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Field Hockey</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Figure Skates</a></li>
          </ul>
          <div className='d-flex'>
            <button class="btn text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button class="btn text-white">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button class="btn text-white started">
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
          </div>

        </div>
      </nav>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide p-3" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className="active"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SlideImageOne} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={SlideImageTwo} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={SlideImageThree} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={SlideImageFour} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='card-container'>
        <div class="card">
          <div class="img-box">
            <img src={cardImg1} />
          </div>
          <div class="content">
            <h2>Custom Lacrosse Heads</h2>
            <p>
              We take real pride in our custom work. Lacrosse heads are no different. Any color combinations, are available.
            </p>
            <a href="">Shop Now</a>
          </div>
        </div>
        <div class="card">
          <div class="img-box">
            <img
              src={cardImg2} />
          </div>
          <div class="content">
            <h2>Dove Tail Bats</h2>
            <span>BATS BUILT TO BOOST POWER<br /> PERFORMANCE</span>
            <p>Premium materials designed to precise standards with one mission in mind: Each bat we make improves every swing you take.</p>
            <a href="">BUY YOUR BEST BAT  </a>
          </div>
        </div>
        <div class="card without-button">
          <div class="img-box">
            <img
              src={cardImg3} />
          </div>
          <div class="content">
            <h2>We'll do the DIRTY work for YOU!</h2>
            <p>
              Kleen 'n Hard Sports' Esporta Wash System is #1 as it kills 99.9999% of staph and MRSA bacteria deep into the padding without
              damaging the equipment. Our patented mesh bags with compartments for each piece of equipment and wash chambers protect the equipment
              while running through a 2 hour, 4 stage process of detergents, sanitizers and a nice fresh fragrance cycle. After the extract cycle
              the gear is then dried overnight, under fans, within the mesh bag. Leather palms of gloves come out nice and soft.
            </p>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div class="card">
          <div class="img-box">
            <img src={cardImg4} />
          </div>
          <div class="content">
            <h2>Pro Baseball Glove Repair</h2>
            <p>
              Any make, any model. Featuring genuine Mizuno leather. Strongest in the game.
              Catchers Mit, First Base Mit, specialists! Multiple colors available.
            </p>
            <a href="">Shop Me</a>
          </div>
        </div>
        <div class="card">
          <div class="img-box">
            <img
              src={cardImg5} />
          </div>
          <div class="content">
            <h2>Worcester's #1 Hockey Shop</h2>
            <p>
              We cater to youth organizations, Men's League, High School, College, and beyond. #1 for 16 years. Close-out deals,
            </p>
            <a href="">Skates</a>
          </div>
        </div>
      </div>

      <div className='feature-container'>
        <h2>Feature Products</h2>
        <div className='products-row'>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product2} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product2} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product2} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product2} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
        </div>
        <div className='products-row'>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product3} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product3} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product3} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
          <div className='product-section'>
            <div className='product-img'>
              <img src={product3} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>CCM Tacks Youth Ice Hockey Stick</span>
              <span className='product-vendor'>CCM</span>
              <span className='product-price'>$49.99</span>
            </div>
          </div>
        </div>
        <div>
          <button className='ViewAll'> <a href="" className='ViewAll'>View All</a></button>
        </div>
      </div>
      <div className='feature-container'>
        <h2>TRENDING ITEMS</h2>
        <div className='products-row'>
          <div className='product-Trending'>
            <div className='product-imgFuture'>
              <img src={product10} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>DTB Tremor (-3) Alloy BBCOR Baseball Bat</span>
              <span className='product-vendor'>DTB</span>
              <span className='product-price'><s>$359.99</s>&nbsp;&nbsp;<span class="product-price__sale-label">$199.95Sale</span></span>
            </div>
          </div>
          <div className='product-Trending'>
            <div className='product-imgFuture'>
              <img src={product10} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>DTB Tremor (-3) Alloy BBCOR Baseball Bat</span>
              <span className='product-vendor'>DTB</span>
              <span className='product-price'><s>$359.99</s>&nbsp;&nbsp;<span class="product-price__sale-label">$199.95Sale</span></span>
            </div>
          </div>
          <div className='product-Trending'>
            <div className='product-imgFuture'>
              <img src={product10} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>DTB Tremor (-3) Alloy BBCOR Baseball Bat</span>
              <span className='product-vendor'>DTB</span>
              <span className='product-price'><s>$359.99</s>&nbsp;&nbsp;<span class="product-price__sale-label">$199.95Sale</span></span>
            </div>
          </div>
          <div className='product-Trending'>
            <div className='product-imgFuture'>
              <img src={product10} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>DTB Tremor (-3) Alloy BBCOR Baseball Bat</span>
              <span className='product-vendor'>DTB</span>
              <span className='product-price'><s>$359.99</s>&nbsp;&nbsp;<span class="product-price__sale-label">$199.95Sale</span></span>
            </div>
          </div>
          <div className='product-Trending'>
            <div className='product-imgFuture'>
              <img src={product10} />
            </div>
            <div className='product-desc'>
              <span className='product-title'>DTB Tremor (-3) Alloy BBCOR Baseball Bat</span>
              <span className='product-vendor'>DTB</span>
              <span className='product-price'><s>$359.99</s>&nbsp;&nbsp;<span class="product-price__sale-label">$199.95Sale</span></span>
            </div>
          </div>
        </div>
      </div>
      <div className='partner-container'>
        <h2>PARTNERS</h2>
        <div className='partner-row'>
          <div className='partner-img'>
            <img src={partner1} />
          </div>
          <div className='partner-img'>
            <img src={partner2} />
          </div>
          <div className='partner-img'>
            <img src={partner3} />
          </div>
          <div className='partner-img'>
            <img src={partner4} />
          </div>
        </div>
        <div className='partner-row'>
          <div className='partner-img'>
            <img src={partner5} />
          </div>
          <div className='partner-img'>
            <img src={partner6} />
          </div>
          <div className='partner-img'>
            <img src={partner7} />
          </div>
          <div className='partner-img'>
            <img src={partner8} />
          </div>
        </div>
        <div className='partner-row'>
          <div className='partner-img'>
            <img src={partner9} />
          </div>
        </div>
      </div>
    </div>
  )
}
