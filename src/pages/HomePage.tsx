import React, { useRef } from 'react';
import { Row, Col, Typography, Card, Carousel, Button, Space } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { ArrowRightOutlined, EnvironmentOutlined, TeamOutlined, SafetyOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import '../styles/components/HomePage.less';

// Import images
import kuariRanges from '../assets/treks/kuari/kuari-ranges.png';
import groupSummit from '../assets/treks/yulla/group-summit.png';
import groupMountain from '../assets/treks/spiti/group-mountain.png';
import groupBackpack from '../assets/treks/yulla/group-backpack.png';
import yullaPanorama1 from '../assets/treks/yulla/panorma.jpg';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const carouselRef = useRef<CarouselRef>(null);
  const navigate = useNavigate();

  const navigateToUpcoming = () => {
    navigate('/upcoming');
  };

  const carouselImages = [
    {
      src: kuariRanges,
      alt: 'Kuari Pass Trek'
    },
    {
      src: groupSummit,
      alt: 'Yulla Kanda Trek'
    },
    {
      src: groupMountain,
      alt: 'Spiti Valley'
    },
    {
      src: groupBackpack,
      alt: 'Yulla Kanda Trek Group with Backpack'
    }
  ];

  const signatureActivities = [
    {
      title: '🧡 Happiness Sharing',
      description: 'A heartfelt circle where stories flow, walls fall, and strangers become a tribe.',
      icon: <TeamOutlined className={`activity-icon ${isDarkMode ? 'dark-mode' : ''}`} />
    },
    {
      title: '😌 Meditation & Journaling',
      description: 'A quiet inner journey where you pause, breathe, reflect, and reconnect with yourself amidst the serenity of nature.',
      icon: <EnvironmentOutlined className={`activity-icon ${isDarkMode ? 'dark-mode' : ''}`} />
    },
    {
      title: '🏔 Alpine Olympics',
      description: 'A playful battle of balance, strength, and laughter where the wild becomes your arena.',
      icon: <SafetyOutlined className={`activity-icon ${isDarkMode ? 'dark-mode' : ''}`} />
    },
    {
      title: '🔭 Astro Nite',
      description: 'A magical session where we observe the Moon, planets, and the night sky through a telescope.',
      icon: <EnvironmentOutlined className={`activity-icon ${isDarkMode ? 'dark-mode' : ''}`} />
    },
    {
      title: '🏵 Mandala Workshop',
      description: 'Creative expression through traditional mandala art, connecting with ancient wisdom and inner peace.',
      icon: <TeamOutlined className={`activity-icon ${isDarkMode ? 'dark-mode' : ''}`} />
    }
  ];

  return (
    <div className={`homepage-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${yullaPanorama1})` }}
      >
        {/* Overlay for text readability */}
        <div className="hero-overlay" />
        
        {/* Content with higher z-index */}
        <div className="hero-content">
          <Title level={1} className="hero-title">
            Welcome to Oh-Bhaisahab Experiences
          </Title>
          <Paragraph className="hero-paragraph">
            Embark on unforgettable adventures in the heart of the Himalayas. 
            We specialize in creating authentic trekking and adventure experiences 
            that connect you with nature and challenge your limits.
          </Paragraph>
          <Button 
            type="primary" 
            size="large" 
            icon={<ArrowRightOutlined />}
            className="hero-button"
            onClick={navigateToUpcoming}
          >
            Explore Upcoming Adventures
          </Button>
        </div>
      </div>

      {/* About OBS Section */}
      <div className="about-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <Title level={2} className="about-title">About Oh-Bhaisahab Experiences</Title>
            <Paragraph className="about-paragraph">
              Oh-Bhaisahab Experiences (OBS) is more than just a trekking company - we are your gateway 
              to authentic Himalayan adventures. Founded with a passion for the mountains and a commitment 
              to sustainable tourism, we offer carefully crafted experiences that showcase the natural 
              beauty and cultural richness of the Indian Himalayas.
            </Paragraph>
            <Paragraph className="about-paragraph">
              Our mission is to provide safe, memorable, and environmentally responsible adventure 
              experiences while supporting local communities and preserving the pristine beauty of 
              the mountains for future generations.
            </Paragraph>
          </Col>
          <Col xs={24} lg={12}>
            <div className="carousel-container">
              <Carousel 
                ref={carouselRef}
                autoplay 
                effect="fade"
                dots={false}
                style={{ borderRadius: '8px', overflow: 'hidden' }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index}>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </Carousel>
              
              {/* Navigation Buttons */}
              <Button
                type="text"
                icon={<LeftOutlined />}
                onClick={() => carouselRef.current?.prev()}
                className="nav-button-left"
              />
              
              <Button
                type="text"
                icon={<RightOutlined />}
                onClick={() => carouselRef.current?.next()}
                className="nav-button-right"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Signature Activities */}
      <div className={`content-section ${isDarkMode ? 'dark' : 'light'}`}>
        <Title level={2} className="section-title">
          Our Signature Activities
        </Title>
        <div className="activities-flex-container">
          {/* Video Section - Primary Content */}
          <div className="video-primary">
            <div className="video-container">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/DGmrc1FvoNo"
                  title="Oh Bhaisahab Experiences - Adventure Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="youtube-iframe"
                />
              </div>
            </div>
          </div>
          
          {/* Activities Section - Secondary Content */}
          <div className="activities-secondary">
            <div className="activities-grid">
              {signatureActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <Card 
                    hoverable
                    className="activity-card"
                  >
                    <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px' }}>{activity.title.split(' ')[0]}</div>
                      <Title level={4} style={{ margin: 0, fontSize: '18px' }}>
                        {activity.title.substring(activity.title.indexOf(' ') + 1)}
                      </Title>
                      <Paragraph style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                        {activity.description}
                      </Paragraph>
                    </Space>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose OBS */}
      <div className={`content-section ${isDarkMode ? 'dark-alt' : 'light-alt'}`}>
        <Title level={2} className="section-title">
          Why Choose Oh-Bhaisahab Experiences?
        </Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card className="feature-card">
              <Title level={4}>🏔️ Experienced Trek Leader</Title>
              <Paragraph>
                Led by Yatharth, an experienced trekker with 7+ years of Himalayan trekking experience, 
                ensuring safe and transformative adventures with deep knowledge of terrain and culture.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="feature-card">
              <Title level={4}>🛡️ Safety First</Title>
              <Paragraph>
                We prioritize your safety with proper equipment, emergency protocols, 
                and comprehensive insurance coverage for all our adventures.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="feature-card">
              <Title level={4}>🌱 Sustainable Tourism</Title>
              <Paragraph>
                We are committed to responsible tourism practices that protect the 
                environment and support local communities.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="feature-card">
              <Title level={4}>📸 Memorable Experiences</Title>
              <Paragraph>
                From sunrise treks to cultural interactions, we create moments 
                that will stay with you for a lifetime.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
