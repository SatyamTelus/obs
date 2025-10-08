import React from 'react';
import { Row, Col, Typography, Card, Rate, Avatar, Tag, Space, Button } from 'antd';
import { UserOutlined, CalendarOutlined, EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';
import '../styles/components/HeroSection.less';
import '../styles/components/DiariesPage.less';
import sceneryOtw from '../assets/treks/yulla/scenery-otw.jpg';
import groupSummit from '../assets/treks/yulla/group-summit.png';
import groupSummitSpiti from '../assets/treks/spiti/group-mountain.png';
import groupSummitKuari from '../assets/treks/kuari/group-previous.png';
import tejasviTestimonial from '../assets/testimonials/tejasvi.jpg';
import pranathiTestimonial from '../assets/testimonials/pranathi.jpg';

const { Title, Paragraph } = Typography;

const DiariesPage: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const experiences = [
    {
      id: 1,
      title: 'Kuari Pass Trek - Winter Wonderland',
      date: 'March 2025',
      location: 'Garhwal, Uttarakhand',
      image: groupSummitKuari,
      description: 'An incredible winter trek through snow-covered trails with breathtaking views of Nanda Devi and other peaks.',
      participants: 12,
      duration: '6 days',
      difficulty: 'Moderate'
    },
    {
      id: 2,
      title: `Yulla Kanda - Trek to World's Highest Krishna Temple`,
      date: 'August 2025',
      location: 'Himachal Pradesh',
      image: groupSummit,
      description: 'Witnessed the mesmerizing views of the world\'s highest Shri Krishna temple, located at an altitude of about 3,895 meters',
      participants: 6,
      duration: '5 days',
      difficulty: 'Easy to Moderate'
    },
    {
      id: 3,
      title: 'Spiti Valley - Desert Mountain Adventure',
      date: 'September 2025',
      location: 'Himachal Pradesh',
      image: groupSummitSpiti,
      description: 'Explored the high-altitude desert landscape, ancient monasteries, and crystal-clear lakes of the vast Spiti Valley.',
      participants: 7,
      duration: '8 days',
      difficulty: 'Moderate to Challenging'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Satyam Bajpai',
      location: 'Gwalior',
      rating: 5,
      experience: 'Yulla Kanda Trek',
      review: 'The Yulla Kanda trek was phenomenal! Reaching the world\'s highest Krishna temple was life-changing. OBS made it more than just a trek - it was a journey of self-discovery.',
      date: 'August 2025'
    },
    {
      id: 2,
      name: 'Sahil Kattna',
      location: 'Hamirpur',
      rating: 5,
      experience: 'Yulla Kanda Trek',
      review: 'OBS redefined adventure travel for me! Perfectly organized with safety as priority. The spiritual aspect and group bonding activities were exceptional.',
      date: 'August 2025'
    },
    {
      id: 3,
      name: 'Pranathi Punjaala',
      location: 'Hyderabad',
      rating: 5,
      experience: 'Yulla Kanda Trek',
      review: 'This OBS experience introduced me to a different version of myself and expanded my comfort zone. It helped me realize my capabilities and the importance of finding like-minded people. Most importantly, it taught me self-compassion - something I\'ve always struggled with. Thank you @yatharthgairola for this transformative experience!',
      date: 'August 2025'
    },
    {
      id: 4,
      name: 'Dr. Sonali Gupta',
      location: 'Delhi',
      rating: 5,
      experience: 'Spiti Valley Adventure',
      review: 'Every step on those trails gave me joy, strength, and beautiful memories. Strangers turned into friends, creating moments I\'ll always cherish. Yatharth is such a pure soul, full of energy and innocence that instantly touches your heart. Thank you for spreading happiness wherever you go - my heart is full!',
      date: 'September 2025'
    },
    {
      id: 5,
      name: 'Bhavya Goyal',
      location: 'Ludhiana',
      rating: 5,
      experience: 'Spiti Valley Adventure',
      review: 'OBS transformed my understanding of adventure travel! Perfectly balanced between adventure and cultural exploration. Creates memories that last a lifetime!',
      date: 'September 2025'
    },
    {
      id: 6,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      experience: 'Kuari Pass Trek',
      review: 'The winter Kuari Pass trek was magical! Snow-covered trails and breathtaking views of Nanda Devi. Yatharth\'s guidance made it safe and unforgettable.',
      date: 'March 2025'
    },
    {
      id: 7,
      name: 'Priya Sharma',
      location: 'Bangalore',
      rating: 5,
      experience: 'Kuari Pass Trek',
      review: 'Amazing winter adventure! The signature OBS experiences like Happiness Sharing and Alpine Olympics made this trek truly special. Highly recommended!',
      date: 'March 2025'
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
        style={{ backgroundImage: `url(${sceneryOtw})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <Title level={1} className="hero-title">
            Previous OBS Diaries
          </Title>
          <Paragraph className="hero-paragraph">
            Relive the memories of our past Oh-Bhaisahab experiences and read testimonials from fellow adventurers
          </Paragraph>
        </div>
      </div>

      {/* Kuari Pass Coming Soon Section */}
      <div className="kuari-coming-soon" style={{ 
        padding: '40px 24px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <Card 
          style={{ 
            background: isDarkMode 
              ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' 
              : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            border: isDarkMode ? '2px solid #404040' : '2px solid #1e3a8a',
            borderRadius: '16px',
            boxShadow: isDarkMode 
              ? '0 8px 32px rgba(0,0,0,0.3)' 
              : '0 8px 32px rgba(30, 58, 138, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#ff4d4f',
            animation: 'blink 1.5s infinite',
            boxShadow: '0 0 10px #ff4d4f'
          }} />
          
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title 
                level={2} 
                style={{ 
                  margin: 0,
                  color: isDarkMode ? '#e5e5e5' : '#1e3a8a',
                  textShadow: isDarkMode ? '0 2px 4px rgba(0,0,0,0.5)' : '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                🏔️ Kuari Pass Trek is Coming Back!
              </Title>
              <Paragraph 
                style={{ 
                  fontSize: '18px',
                  margin: '8px 0 0 0',
                  color: isDarkMode ? '#a3a3a3' : '#dc2626',
                  fontWeight: '600'
                }}
              >
                December 25-30, 2025 • Winter Wonderland Experience
              </Paragraph>
            </div>
            
            <Paragraph 
              style={{ 
                fontSize: '16px',
                color: isDarkMode ? '#d4d4d4' : '#374151',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
            >
              After the incredible success of our previous Kuari Pass adventures, we're excited to announce 
              our upcoming winter trek! Experience the magic of snow-covered trails and breathtaking 
              Himalayan views.
            </Paragraph>
            
            <Button 
              type="primary" 
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={() => navigate('/upcoming')}
              className="hero-button"
              style={{ 
                height: '50px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
              }}
            >
              Get Details & Book Now
            </Button>
          </Space>
        </Card>
      </div>

      {/* Past Experiences */}
      <div className="experiences-section" style={{ 
        padding: '80px 24px', 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          Our Recent Adventures
        </Title>
        <Row gutter={[24, 24]}>
          {experiences.map((experience) => (
            <Col xs={24} sm={12} lg={8} key={experience.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={experience.title}
                    src={experience.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                }
                style={{ 
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                bodyStyle={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '16px'
                }}
              >
                <Space direction="vertical" size="small" style={{ width: '100%', flex: 1 }}>
                  <Title level={4} style={{ margin: 0 }}>{experience.title}</Title>
                  <Space>
                    <CalendarOutlined />
                    <span>{experience.date}</span>
                  </Space>
                  <Space>
                    <EnvironmentOutlined />
                    <span>{experience.location}</span>
                  </Space>
                  <Paragraph style={{ flex: 1 }}>{experience.description}</Paragraph>
                </Space>
                <div className="experience-tags" style={{ 
                  marginTop: 'auto', 
                  paddingTop: '12px',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: '8px',
                  justifyContent: 'space-between'
                }}>
                  <Tag color="blue">{experience.duration}</Tag>
                  <Tag color="green">{experience.difficulty}</Tag>
                  <Tag color="orange">{experience.participants} participants</Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section" style={{ 
        background: isDarkMode ? '#1a1a1a' : 'white', 
        padding: '80px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        transition: 'background-color 0.3s ease'
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '48px' }}>
          What Our Adventurers Say
        </Title>
        <Row gutter={[24, 24]}>
          {reviews.map((review) => (
            <Col xs={24} md={12} lg={8} key={review.id}>
              <Card 
                style={{ 
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar size={48} icon={<UserOutlined />} />
                    <div>
                      <Title level={5} style={{ margin: 0 }}>{review.name}</Title>
                      <Paragraph style={{ margin: 0, color: '#666' }}>
                        {review.location} • {review.date}
                      </Paragraph>
                    </div>
                  </div>
                  
                  <div>
                    <Rate disabled defaultValue={review.rating} style={{ fontSize: '14px' }} />
                    <Tag color="blue" style={{ marginLeft: '8px' }}>
                      {review.experience}
                    </Tag>
                  </div>
                  
                  <Paragraph style={{ margin: 0, fontStyle: 'italic' }}>
                    "{review.review}"
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Featured Testimonials - Social Media Posts */}
        <div style={{ marginTop: '60px' }}>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '40px', color: isDarkMode ? '#fff' : '#000' }}>
            Stories That Speak Volumes
          </Title>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={12} lg={10}>
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
                <img
                  src={tejasviTestimonial}
                  alt="Tejasvi's testimonial from @sahtejasvi"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '16px'
                  }}
                />
              </Card>
            </Col>
            
            <Col xs={24} md={12} lg={10}>
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
                <img
                  src={pranathiTestimonial}
                  alt="Pranathi's testimonial from @pranathi_punjaala"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '16px'
                  }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DiariesPage;
