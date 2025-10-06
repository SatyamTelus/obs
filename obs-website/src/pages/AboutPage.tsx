import React from 'react';
import { Row, Col, Typography, Card, Space, Avatar, Timeline, Button, Carousel } from 'antd';
import { TeamOutlined, GlobalOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import '../styles/components/HeroSection.less';
import obsBackImage from '../assets/yatharth/obs-cover.jpg';
import yatharthImage from '../assets/yatharth/yath-portrait.png';
import ambujImage from '../assets/yatharth/ambuj.jpeg';
import obsPointing from '../assets/yatharth/obs-pointing.jpg';
import bikeImage from '../assets/yatharth/bike.jpg';
import skyDivingImage from '../assets/yatharth/yath-sky-diving.png';
import gifts from '../assets/treks/spiti/gifts.png';

const { Title, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  
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
      role: 'Founder & Lead Guide',
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
      role: 'Operations Manager',
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
      year: 'March 2025',
      title: 'Foundation',
      description: 'Oh-Bhaisahab Experiences was founded as a passion project turned movement to create adventure-driven, soul-nourishing outdoor experiences.'
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
              An OH-BHAISAB experience pushes you beyond your resume. It's a thrill that stays with you. 
              It's about gaining clarity and freeing up your mind-space. Adventure here is all about mindset, 
              not age and not just adrenaline.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Founded in March 2025 by Yatharth Gairola, Oh Bhaisahab Experiences is a passion project turned movement — 
              a space where people disconnect from chaos and reconnect with nature, community, and themselves. 
              We curate adventure-driven, soul-nourishing outdoor experiences that challenge the body, open the heart, 
              and awaken the spirit.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              The name "Oh-Bhaisahab" reflects our respect for the mountains and the local culture. 
              We believe that every adventure should be more than just a physical journey - it should 
              be a transformative experience that connects you with nature, culture, and yourself.
            </Paragraph>
          </Col>
          <Col xs={24} lg={12}>
            <Carousel 
              autoplay 
              effect="fade"
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            >
              {storyCarouselImages.map((image, index) => (
                <div key={index}>
                  <div style={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      padding: '20px'
                    }}>
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

      {/* Key Elements */}
      <div style={{ 
        background: isDarkMode ? '#1a1a1a' : 'white', 
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        transition: 'background-color 0.3s ease'
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Key Elements of an OH-BHAISAB Experience
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
                  We are not just taking you on a trip — We are taking you deeper into yourself! 
                  Leave comfort behind. Find the stronger version of YOU! We provide safe, authentic, 
                  and transformative Himalayan adventures that connect people with nature, promote 
                  sustainable tourism, and create lasting memories while supporting local communities.
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
                  To turn treks into transformations, fun into self-discovery, & discomfort into growth. 
                  We envision every participant saying "Oh-Bhaisahab, Mazaa Aa Gaya!" after their 
                  transformative journey, creating a community of adventure enthusiasts who believe 
                  in pushing beyond their limits.
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
