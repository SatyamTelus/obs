import React, { useState } from 'react';
import { Row, Col, Typography, Card, Space, Avatar, Timeline, Button, Carousel } from 'antd';
import { TeamOutlined, GlobalOutlined, LinkedinOutlined, YoutubeOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import '../styles/components/HeroSection.less';
import '../styles/components/UpcomingPage.less';
import obsBackImage from '../assets/yatharth/obs-cover.jpg';
import yatharthImage from '../assets/yatharth/yath-portrait.png';
import ambujImage from '../assets/yatharth/ambuj.jpeg';
import obsPointing from '../assets/yatharth/obs-pointing.jpg';
import bikeImage from '../assets/yatharth/bike.jpg';
import skyDivingImage from '../assets/yatharth/yath-sky-diving.png';
import gifts from '../assets/treks/spiti/gifts.png';

const { Title, Paragraph, Text } = Typography;

const AboutPage: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const storyCarouselImages = [
    {
      src: obsPointing,
      alt: 'Yatharth pointing at Yulla Kanda temple'
    },
    {
      src: bikeImage,
      alt: 'Adventure motorcycle touring'
    },
    {
      src: skyDivingImage,
      alt: 'Skydiving adventure'
    },
    {
      src: gifts,
      alt: 'Gifts for Winners'
    }
  ];
  const teamMembers = [
    {
      name: 'Yatharth Gairola',
      role: 'Founder & Experience Curator',
      experience: 'Content Creator since 2018, Ex-Physics Faculty',
      image: yatharthImage,
      description: 'B.E. Mechanical Engineering & M.Sc. Physics from BITS Pilani. Combines love for fitness, nature, and meaningful human connection to create experiences that are fun, raw, and transformative.',
      socialLinks: {
        youtube: 'https://www.youtube.com/@yatharthgairola',
        linkedin: 'https://www.linkedin.com/in/yatharthgairola'
      }
    },
    {
      name: 'Ambuj Saxena',
      role: 'Lead of Operations',
      experience: '5+ years in digital marketing & operations',
      image: ambujImage,
      description: 'Entrepreneur, digital marketing expert, and YouTuber with 25K+ subscribers. Ensures smooth operations and exceptional customer experience for all our adventures.',
      socialLinks: {
        youtube: 'https://www.youtube.com/@ambuj_saxena_india/featured',
        linkedin: 'https://in.linkedin.com/in/ambuj-saxena-india'
      }
    }
  ];


  const milestones = [
    {
      year: 'December 2024',
      title: 'The Spark',
      description: 'It all started with what I like to call "OBS Experience Pt. 0" - a sponsored trek that sparked the idea of creating fulfilling experiences for others. This was the moment when a simple thought transformed into a vision.',
      videoUrl: 'https://www.youtube.com/watch?v=PLG-M8U1-6Y'
    },
    {
      year: 'March 2025',
      title: 'Foundation',
      description: 'Oh-Bhaisahab Experiences was officially founded as a passion project turned movement to create adventure-driven, soul-nourishing outdoor experiences.'
    },
    {
      year: '2025',
      title: 'First Adventures',
      description: 'Successfully launched Kuari Pass Trek, Yulla Kanda Trek, and Spiti Valley Adventure, leading participants from age 15 to 73.'
    },
    {
      year: '2025',
      title: 'Signature Experiences',
      description: 'Introduced our unique signature activities: Happiness Sharing, Meditation & Journaling, Alpine Olympics, Astro Nite, and Mandala Workshop.'
    },
    {
      year: 'Future',
      title: 'Vision',
      description: 'Continuing to create transformative experiences where participants say "Oh-Bhaisahab, Mazaa Aa Gaya!"'
    }
  ];

  return (
    <div style={{ 
      background: isDarkMode ? '#0f0f0f' : '#f5f5f5', 
      minHeight: '100vh',
      transition: 'background-color 0.3s ease'
    }}>
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${obsBackImage})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <Title level={1} className="hero-title">
            About Oh-Bhaisahab Experiences
          </Title>
          <Paragraph className="hero-paragraph">
            Discover the story behind our passion for Himalayan adventures
          </Paragraph>
        </div>
      </div>

      {/* Our Story */}
      <div style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <Title level={2}>Our Story</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Oh-Bhaisahab Experiences started with a simple dream—to blend adventure, fitness, and soulful activities into trekking, and turn it into something far more meaningful. For we believe, a trek is not just about reaching the summit, but about creating moments of connection, reflection, and transformation. OBS is #NotJustATrek—it's a journey that stays with you long after the trail ends.
            </Paragraph>
            
            {isExpanded && (
              <>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  What started as a passion project by Yatharth Gairola has now grown into a community movement—where strangers become family, and every trail becomes a story of courage, laughter, and reflection.
                </Paragraph>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  At Oh-Bhaisahab Experiences (OBS), we believe life's best lessons are learned outside the classroom and beyond the comfort zone. From Himalayan trails to starry night skies, we curate journeys that blend adventure, reflection, fitness, and human connection.
                </Paragraph>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                  Every trek is more than just a climb – it's about sharing laughter, pushing limits together, and returning with memories that last a lifetime. We are not just a travel company, we are a community that celebrates courage, curiosity, and the joy of living fully.
                </Paragraph>
              </>
            )}
            
            <Button 
              type="link" 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ 
                padding: 0, 
                height: 'auto',
                color: '#d4a574',
                fontWeight: 'bold'
              }}
              icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </Col>
          <Col xs={24} lg={12}>
            {/* Instagram Reel */}
            <Card
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                border: 'none',
                background: isDarkMode ? '#2a2a2a' : '#fff'
              }}
              bodyStyle={{ padding: 0 }}
            >
              <div style={{ 
                position: 'relative', 
                width: '100%',
                height: '500px', // Fixed height to ensure full content visibility
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://www.instagram.com/reel/DM-ZpszzS9_/embed/"
                  title="Oh-Bhaisahab Experiences Instagram Reel"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '6px 10px',
                  borderRadius: '16px',
                  fontSize: '11px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 10
                }}>
                  <span style={{ fontSize: '12px' }}>📱</span>
                  Follow @yatharthgairola
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        
        {/* Carousel Section - Below Our Story */}
        <div style={{ marginTop: '60px' }}>
          <Row justify="center">
            <Col xs={24} lg={16}>
              <Title level={3} style={{ 
                textAlign: 'center', 
                marginBottom: '32px',
                color: isDarkMode ? '#fff' : '#000'
              }}>
                Adventure Gallery
              </Title>
              <Carousel 
                autoplay 
                effect="fade"
                style={{ borderRadius: '12px', overflow: 'hidden' }}
                className="about-carousel"
              >
                {storyCarouselImages.map((image, index) => (
                  <div key={index}>
                    <div 
                      className="carousel-slide"
                      style={{ backgroundImage: `url(${image.src})` }}
                    >
                      <div className="carousel-overlay">
                        <Title level={3} style={{ color: 'white', margin: 0 }}>
                          Adventure Awaits
                        </Title>
                        <Paragraph style={{ color: 'white', margin: 0 }}>
                          Join us for unforgettable experiences in the Himalayas
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </div>

      {/* Key Elements */}
      <div style={{ 
        background: isDarkMode ? '#1a1a1a' : 'white', 
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        transition: 'background-color 0.3s ease'
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Key Elements of an OH-BHAISAHAB Experience
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card 
              hoverable
              style={{ 
                height: '100%',
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ fontSize: '32px' }}>🎯</div>
                <Title level={4}>Purposeful Adventure</Title>
                <Paragraph>Find clarity while embracing the thrill. Adventure here is all about mindset, not age and not just adrenaline.</Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              hoverable
              style={{ 
                height: '100%',
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ fontSize: '32px' }}>🧠</div>
                <Title level={4}>Mindset Over Age</Title>
                <Paragraph>It's your mindset that counts. We've led participants from age 15 to 73 who pushed their limits and discovered new sides of themselves.</Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              hoverable
              style={{ 
                height: '100%',
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ fontSize: '32px' }}>🚀</div>
                <Title level={4}>Break Routine</Title>
                <Paragraph>Step out of your comfort zone for a fresh perspective. Disconnect from chaos and reconnect with nature, community, and yourself.</Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              hoverable
              style={{ 
                height: '100%',
                textAlign: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ fontSize: '32px' }}>📈</div>
                <Title level={4}>Consistent Growth</Title>
                <Paragraph>Combine consistency with adventure for personal growth. Create experiences that are fun, raw, and transformative.</Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>


      {/* Our Team */}
      <div style={{ 
        background: isDarkMode ? '#262626' : '#f8f9fa', 
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        transition: 'background-color 0.3s ease'
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Meet Our Team
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {teamMembers.map((member, index) => (
            <Col xs={24} md={12} lg={10} key={index}>
              <Card 
                style={{ 
                  height: '100%',
                  textAlign: 'center',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <Space direction="vertical" size="large" style={{ width: '100%', height: '100%' }}>
                  <Avatar 
                    size={120} 
                    src={member.image}
                    style={{ border: '4px solid #d4a574' }}
                  />
                  <div>
                    <Title level={4} style={{ margin: 0 }}>{member.name}</Title>
                    <div style={{ color: '#666', fontSize: '16px' }}>{member.role}</div>
                    <div style={{ color: '#666' }}>{member.experience}</div>
                  </div>
                  <Paragraph style={{ minHeight: '80px', marginBottom: '16px' }}>{member.description}</Paragraph>
                  <div style={{ marginTop: 'auto' }}>
                    <Space size="middle">
                      <Button 
                        type="link" 
                        icon={<YoutubeOutlined style={{ color: '#ff0000' }} />}
                        href={member.socialLinks.youtube}
                        target="_blank"
                        style={{ padding: 0 }}
                      >
                        YouTube
                      </Button>
                      <Button 
                        type="link" 
                        icon={<LinkedinOutlined style={{ color: '#0077b5' }} />}
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        style={{ padding: 0 }}
                      >
                        LinkedIn
                      </Button>
                    </Space>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Journey */}
      <div style={{ 
        background: isDarkMode ? '#1a1a1a' : 'white', 
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        transition: 'background-color 0.3s ease'
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Our Journey
        </Title>
        <Row justify="center">
          <Col xs={24} lg={16}>
            <Timeline
              items={milestones.map((milestone, index) => ({
                children: (
                  <div>
                    <Title level={4} style={{ margin: 0, color: '#d4a574' }}>
                      {milestone.year} - {milestone.title}
                    </Title>
                    <Paragraph style={{ margin: '8px 0 0 0' }}>
                      {milestone.description}
                    </Paragraph>
                    {milestone.videoUrl && (
                      <div style={{ marginTop: '16px' }}>
                        <div style={{ 
                          position: 'relative',
                          paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                          width: '100%',
                          maxWidth: '400px'
                        }}>
                          <iframe
                            src="https://www.youtube.com/embed/PLG-M8U1-6Y"
                            title="The Beginning of Oh-Bhaisahab Experiences"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                            }}
                          />
                        </div>
                        <Text style={{ fontSize: '12px', color: '#666', fontStyle: 'italic' }}>
                          Watch the story of how it all began
                        </Text>
                      </div>
                    )}
                  </div>
                ),
                color: index % 2 === 0 ? 'blue' : 'green'
              }))}
            />
          </Col>
        </Row>
      </div>

      {/* Mission & Vision */}
      <div style={{ 
        background: isDarkMode ? '#262626' : '#f8f9fa', 
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        transition: 'background-color 0.3s ease'
      }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card 
              style={{ 
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                  <GlobalOutlined style={{ fontSize: '48px', color: isDarkMode ? '#e5e5e5' : '#d4a574' }} />
                </div>
                <Title level={3} style={{ textAlign: 'center' }}>Our Mission</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'center' }}>
                  Our mission is to help you find the stronger version of YOU!<br />
                  We aim to create transformative Himalayan experiences that go beyond trekking— blending adventure, reflection, fitness, and community :)
                </Paragraph>
              </Space>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card 
              style={{ 
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                  <TeamOutlined style={{ fontSize: '48px', color: isDarkMode ? '#52c41a' : '#52c41a' }} />
                </div>
                <Title level={3} style={{ textAlign: 'center' }}>Our Vision</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'center' }}>
                  To create a global movement where adventure becomes a catalyst for personal growth, human connection, and sustainable living — inspiring people everywhere to step beyond comfort, embrace the wild, and discover a deeper version of themselves.
                </Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
