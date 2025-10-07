import React, { useRef } from 'react';
import { Row, Col, Typography, Card, Button, Space, Tag, Alert, Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { CalendarOutlined, EnvironmentOutlined, TeamOutlined, ClockCircleOutlined, WalletOutlined, DownloadOutlined, CreditCardOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import '../styles/components/HeroSection.less';
import '../styles/components/CarouselCustom.less';
import grasslandMountain from '../assets/treks/yulla/grassland-mountain.jpg';
import kuariRanges from '../assets/treks/kuari/kuari-ranges.png';
import groupPrevious from '../assets/treks/kuari/group-previous.png';
import kuariTaliLake from '../assets/treks/kuari/Kuari-Pass-Trek-Tali-Lake.webp';
import kuariScenery from '../assets/treks/kuari/kuari-scenery.avif';
import kuariPassBrochure from '../assets/treks/kuari/Kuari Pass Trek Brochure (Oh Bhaisahab Experience).pdf';
import upiQRCode from '../assets/upi.png';

const { Title, Paragraph, Text } = Typography;

const UpcomingPage: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const paymentMessageRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<CarouselRef>(null);

  // WhatsApp Icon Component
  const WhatsAppIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ marginRight: '8px' }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
    </svg>
  );

  const handleBookNow = () => {
    paymentMessageRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = kuariPassBrochure;
    link.download = 'Kuari Pass Trek Brochure - Oh Bhaisahab Experience.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const kuariPassDetails = {
    title: 'Kuari Pass Trek - Winter Wonderland',
    date: 'December 25-30, 2025',
    duration: '6 Days / 5 Nights',
    difficulty: 'Moderate',
    maxParticipants: "25-30",
    price: '₹12,999 per person',
    location: 'Garhwal Himalayas, Uttarakhand',
    images: [
      kuariRanges,
      kuariTaliLake,
      kuariScenery,
      groupPrevious,
      // Add more images here as you download them
    ],
    description: 'Experience the magic of winter in the Garhwal Himalayas with our signature Kuari Pass trek. This moderate-level trek offers breathtaking views of snow-capped peaks including Nanda Devi, Trishul, and Dronagiri.',
    highlights: [
      'Breathtaking views of Nanda Devi (7,816m) and other Himalayan peaks',
      'Walk through pristine snow-covered trails',
      'Stay in traditional mountain villages',
      'Witness stunning sunrises and sunsets',
      'Experience local Garhwali culture',
      'Professional mountain guides and safety equipment',
      'Signature OBS Experiences including Happiness Sharing, Meditation & Journaling',
      'Welcome & Farewell Gifts, Gifts for Winners'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Dehradun to Joshimath',
        description: 'Drive from Dehradun to Joshimath (280km, 8-9hr drive)',
        type: 'Travel'
      },
      {
        day: 'Day 2',
        title: 'Joshimath to Gulling',
        description: 'Drive from Joshimath to Tugasi (16km), then trek from Tugasi to Gulling (3km)',
        type: 'Travel + Trek'
      },
      {
        day: 'Day 3',
        title: 'Gulling to Khullara',
        description: 'Trek from Gulling to Khullara Campsite (3km)',
        type: 'Trek'
      },
      {
        day: 'Day 4',
        title: 'Khullara to Kuari Pass & back',
        description: 'Summit Day - Trek to Kuari Pass and return (10km round trek)',
        type: 'Trek'
      },
      {
        day: 'Day 5',
        title: 'Khullara to Joshimath',
        description: 'Trek from Khullara to Tugasi (6km), then drive from Tugasi to Joshimath (16km)',
        type: 'Travel + Trek'
      },
      {
        day: 'Day 6',
        title: 'Joshimath to Dehradun',
        description: 'Drive from Joshimath to Dehradun (280km, 8-9hr drive)',
        type: 'Travel'
      }
    ],
    inclusions: [
      'Stay for 5 Nights',
      'Entry/Permit Fees',
      'Local Guide Fee',
      'All meals from dinner on Day 1 to breakfast on Day 6',
      'Transportation from Dehradun to Dehradun (if you opt for this)',
      'Signature OBS (Oh-Bhaisahab) Experiences',
      'Welcome & Farewell Gifts, Gifts for Winners',
      'Memories for a lifetime ;)'
    ],
    exclusions: [
      'Backpack Offloading (if you opt for this)',
      'Any costs arising due to unforeseen circumstances like landslides, road blocks, etc.',
      'Anything not mentioned under Trip Inclusions',
      'Any kind of personal expenses like tips, laundry, etc.'
    ],
    pricing: {
      trekFee: '₹10,499',
      transportationFee: '₹2,500',
      totalCost: '₹12,999',
      registrationFee: '₹2,999',
      remainingAmount: '₹10,000',
      paymentDeadline: '25 November'
    },
    cancellationPolicy: [
      {
        period: 'Before 25 November',
        fee: '₹2,999',
        refund: 'Remaining amount'
      },
      {
        period: '26 November - 14 December',
        fee: '30% of total fee',
        refund: '70%'
      },
      {
        period: '15 December - 22 December',
        fee: '50% of total fee',
        refund: '50%'
      },
      {
        period: 'On or after 23 December',
        fee: '100%',
        refund: 'Non-refundable'
      }
    ]
  };

  return (
    <div style={{ 
      background: isDarkMode ? '#0f0f0f' : '#f5f5f5', 
      minHeight: '100vh',
      transition: 'background-color 0.3s ease'
    }}>
      <div 
        className="hero-section" 
        style={{ backgroundImage: `url(${grasslandMountain})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <Title level={1} className="hero-title">
            Upcoming OBS Experiences
          </Title>
          <Paragraph className="hero-paragraph">
            Join us for our next adventure in the magnificent Himalayas
          </Paragraph>
        </div>
      </div>

      <div style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Experience Card */}
        <Card 
          style={{ 
            marginBottom: '40px',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}
        >
          <Row gutter={[32, 32]} align="top">
            <Col xs={24} lg={12}>
              <div className="trek-carousel" style={{ paddingTop: '8px', position: 'relative' }}>
                <Carousel 
                  ref={carouselRef}
                  autoplay
                  autoplaySpeed={4000}
                  dots={true}
                  dotPosition="bottom"
                  effect="fade"
                  style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                  {kuariPassDetails.images.map((image, index) => (
                    <div key={index}>
                      <img 
                        src={image} 
                        alt={`${kuariPassDetails.title} - Image ${index + 1}`}
                        style={{ 
                          width: '100%', 
                          height: '500px', 
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
                {/* Custom Navigation Arrows */}
                <Button
                  type="primary"
                  shape="circle"
                  icon={<LeftOutlined />}
                  onClick={() => carouselRef.current?.prev()}
                  className="carousel-nav-button"
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: 'none',
                    opacity: 0.7
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                />
                <Button
                  type="primary"
                  shape="circle"
                  icon={<RightOutlined />}
                  onClick={() => carouselRef.current?.next()}
                  className="carousel-nav-button"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: 'none',
                    opacity: 0.7
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={2} style={{ marginBottom: '8px' }}>
                    {kuariPassDetails.title}
                  </Title>
                  <Space wrap>
                    <Tag color="blue" icon={<CalendarOutlined />}>
                      {kuariPassDetails.date}
                    </Tag>
                    <Tag color="green" icon={<ClockCircleOutlined />}>
                      {kuariPassDetails.duration}
                    </Tag>
                    <Tag color="orange" icon={<TeamOutlined />}>
                      Max {kuariPassDetails.maxParticipants} participants
                    </Tag>
                  </Space>
                </div>

                <div>
                  <Space>
                    <EnvironmentOutlined style={{ color: '#d4a574' }} />
                    <Text strong>{kuariPassDetails.location}</Text>
                  </Space>
                </div>

                <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {kuariPassDetails.description}
                </Paragraph>

                <div style={{ 
                  background: '#f0f8ff', 
                  padding: '16px', 
                  borderRadius: '8px',
                  border: '1px solid #d6e4ff'
                }}>
                  <Space>
                    <WalletOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
                    <Text strong style={{ fontSize: '18px', color: '#52c41a' }}>
                      {kuariPassDetails.price}
                    </Text>
                  </Space>
                </div>

                {/* Payment Plan Highlight */}
                <Alert
                  message="🎉 Special Payment Plan Available!"
                  description={
                    <div>
                      <Text strong style={{ fontSize: '16px', color: '#d4a574' }}>
                        Pay just ₹2,999 now and rest before 25th November !!
                      </Text>
                      <br />
                      <Text style={{ fontSize: '14px', color: isDarkMode ? '#a3a3a3' : '#666' }}>
                        Secure your spot with a small registration fee and pay the remaining amount later.
                      </Text>
                    </div>
                  }
                  type="success"
                  showIcon
                  style={{ 
                    borderRadius: '8px',
                    border: '2px solid #d4a574',
                    background: isDarkMode 
                      ? 'linear-gradient(135deg, #1a2f1a 0%, #2d1f0a 100%)'
                      : 'linear-gradient(135deg, #f6ffed 0%, #fff7e6 100%)',
                    color: isDarkMode ? '#e5e5e5' : 'inherit'
                  }}
                />

                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={12}>
                    <Button 
                      type="primary" 
                      size="large" 
                      block
                      onClick={handleBookNow}
                      style={{ 
                        height: '50px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}
                    >
                      Book Now
                    </Button>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Button 
                      type="default" 
                      size="large" 
                      block
                      icon={<DownloadOutlined />}
                      onClick={handleDownloadBrochure}
                      style={{ 
                        height: '50px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderColor: '#d4a574',
                        color: '#d4a574'
                      }}
                    >
                      Download Brochure
                    </Button>
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Card>

        {/* Highlights */}
        <Card title="Trek Highlights" style={{ marginBottom: '40px', borderRadius: '12px' }}>
          <Row gutter={[32, 32]}>
            {/* Video Section */}
            <Col xs={24} lg={12}>
              <div style={{ 
                position: 'relative',
                paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                width: '100%',
                marginBottom: '16px'
              }}>
                <iframe
                  src="https://www.youtube.com/embed/9czKeIJJGjQ"
                  title="Kuari Pass Trek Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            </Col>
            
            {/* Highlights List */}
            <Col xs={24} lg={12}>
              <Row gutter={[16, 16]}>
                {kuariPassDetails.highlights.map((highlight, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <Space>
                      <Text style={{ color: '#52c41a' }}>✓</Text>
                      <Text>{highlight}</Text>
                    </Space>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>

        {/* Itinerary */}
        <Card title="Detailed Itinerary" style={{ marginBottom: '40px', borderRadius: '12px' }}>
          <Row gutter={[24, 24]}>
            {kuariPassDetails.itinerary.map((day, index) => (
              <Col xs={24} key={index}>
                <Card 
                  size="small" 
                  style={{ 
                    background: isDarkMode 
                      ? (index % 2 === 0 ? '#262626' : '#1a1a1a')
                      : (index % 2 === 0 ? '#f8f9fa' : 'white'),
                    border: isDarkMode ? '1px solid #404040' : '1px solid #e8e8e8',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Row align="middle">
                    <Col xs={24} sm={3}>
                      <Tag color="blue" style={{ fontSize: '14px', padding: '4px 12px' }}>
                        {day.day}
                      </Tag>
                    </Col>
                    <Col xs={24} sm={4}>
                      <Tag color={day.type === 'Trek' ? 'green' : day.type === 'Travel' ? 'orange' : 'purple'} style={{ fontSize: '12px', padding: '2px 8px' }}>
                        {day.type}
                      </Tag>
                    </Col>
                    <Col xs={24} sm={6}>
                      <Text strong style={{ color: isDarkMode ? '#e5e5e5' : '#000000' }}>
                        {day.title}
                      </Text>
                    </Col>
                    <Col xs={24} sm={11}>
                      <Text style={{ color: isDarkMode ? '#a3a3a3' : '#666666' }}>
                        {day.description}
                      </Text>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* Inclusions & Exclusions */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card 
              title="What's Included" 
              style={{ borderRadius: '12px' }}
              headStyle={{ background: '#f6ffed', color: '#52c41a' }}
            >
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {kuariPassDetails.inclusions.map((item, index) => (
                  <Space key={index}>
                    <Text style={{ color: '#52c41a' }}>✓</Text>
                    <Text>{item}</Text>
                  </Space>
                ))}
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card 
              title="What's Not Included" 
              style={{ borderRadius: '12px' }}
              headStyle={{ background: '#fff2f0', color: '#ff4d4f' }}
            >
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {kuariPassDetails.exclusions.map((item, index) => (
                  <Space key={index}>
                    <Text style={{ color: '#ff4d4f' }}>✗</Text>
                    <Text>{item}</Text>
                  </Space>
                ))}
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Pricing Breakdown */}
        <Card 
          title="Package Pricing" 
          style={{ 
            marginTop: '40px', 
            borderRadius: '12px',
            background: isDarkMode ? '#1a1a1a' : '#f8f9fa'
          }}
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div style={{ 
                background: isDarkMode ? '#262626' : 'white', 
                padding: '20px', 
                borderRadius: '8px',
                border: '1px solid #e8e8e8'
              }}>
                <Title level={4} style={{ color: '#d4a574', marginBottom: '16px' }}>
                  Cost Breakdown
                </Title>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Row justify="space-between">
                    <Text>Trek Fee:</Text>
                    <Text strong>{kuariPassDetails.pricing.trekFee}</Text>
                  </Row>
                  <Row justify="space-between">
                    <Text>Transportation Fee:</Text>
                    <Text strong>{kuariPassDetails.pricing.transportationFee}</Text>
                  </Row>
                  <hr style={{ margin: '12px 0', border: '1px solid #e8e8e8' }} />
                  <Row justify="space-between">
                    <Text strong style={{ fontSize: '16px' }}>Total Cost:</Text>
                    <Text strong style={{ fontSize: '18px', color: '#52c41a' }}>
                      {kuariPassDetails.pricing.totalCost}
                    </Text>
                  </Row>
                </Space>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ 
                background: isDarkMode ? '#262626' : 'white', 
                padding: '20px', 
                borderRadius: '8px',
                border: '1px solid #e8e8e8'
              }}>
                <Title level={4} style={{ color: '#d4a574', marginBottom: '16px' }}>
                  Payment Schedule
                </Title>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Row justify="space-between">
                    <Text>Registration Fee (Now):</Text>
                    <Text strong style={{ color: '#ff4d4f' }}>
                      {kuariPassDetails.pricing.registrationFee}
                    </Text>
                  </Row>
                  <Row justify="space-between">
                    <Text>Remaining Amount:</Text>
                    <Text strong>{kuariPassDetails.pricing.remainingAmount}</Text>
                  </Row>
                  <Row justify="space-between">
                    <Text>Payment Deadline:</Text>
                    <Text strong style={{ color: '#1890ff' }}>
                      {kuariPassDetails.pricing.paymentDeadline}
                    </Text>
                  </Row>
                </Space>
                <div style={{ 
                  marginTop: '16px', 
                  padding: '12px', 
                  background: '#fff7e6', 
                  borderRadius: '6px',
                  border: '1px solid #ffd591'
                }}>
                  <Text style={{ fontSize: '12px', color: '#d46b08' }}>
                    📞 Contact: +91 79834 14419 for booking
                  </Text>
                </div>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Cancellation Policy */}
        <Card 
          title="Cancellation Policy" 
          style={{ 
            marginTop: '40px', 
            borderRadius: '12px',
            background: isDarkMode ? '#1a1a1a' : '#f8f9fa'
          }}
        >
          <Row gutter={[16, 16]}>
            {kuariPassDetails.cancellationPolicy.map((policy, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card 
                  size="small"
                  style={{ 
                    background: isDarkMode ? '#262626' : 'white',
                    border: '1px solid #e8e8e8',
                    textAlign: 'center'
                  }}
                >
                  <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <Text strong style={{ fontSize: '12px', color: '#666' }}>
                      {policy.period}
                    </Text>
                    <Text style={{ color: '#ff4d4f', fontSize: '14px' }}>
                      Fee: {policy.fee}
                    </Text>
                    <Text style={{ color: '#52c41a', fontSize: '12px' }}>
                      Refund: {policy.refund}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

      </div>

      {/* Payment Integration Message */}
      <div 
        ref={paymentMessageRef}
        style={{ 
          padding: '60px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <Card 
          style={{ 
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            border: '2px solid #d4a574'
          }}
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <CreditCardOutlined style={{ fontSize: '48px', color: '#d4a574' }} />
            <Title level={2} style={{ margin: 0, color: '#d4a574' }}>
              Quick Booking 
            </Title>
            <Alert
              message="Payment Gateway Integration in Progress"
              description="We're currently in the process of setting up secure payment gateway. For now, please use the UPI QR Code below to pay the registration fee."
              type="info"
              showIcon
              style={{ 
                textAlign: 'left',
                borderRadius: '8px'
              }}
            />
            <Row gutter={[24, 24]} align="top">
              <Col xs={24} md={12}>
                <div style={{ 
                  textAlign: 'center', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '300px'
                }}>
                  <Title level={4} style={{ marginBottom: '20px', color: '#d4a574' }}>
                    📱 Scan & Pay
                  </Title>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    marginBottom: '20px',
                    flex: 1,
                    alignItems: 'center'
                  }}>
                    <img 
                      src={upiQRCode} 
                      alt="UPI QR Code for Payment"
                      style={{ 
                        maxWidth: '200px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    />
                  </div>
                  <Text code style={{ fontSize: '14px' }}>
                    UPI ID: gairolayatharth-2@okicici
                  </Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ 
                  textAlign: 'center', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '300px'
                }}>
                  <Title level={4} style={{ marginBottom: '20px', color: '#d4a574' }}>
                    📞 Contact Us
                  </Title>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Paragraph style={{ fontSize: '16px', margin: '0 0 24px 0', lineHeight: '1.8' }}>
                      <Text strong>Reach out to us for any queries:</Text><br />
                      <br />
                      📞 WhatsApp: <Text code>+91 79834 14419</Text><br />
                      📧 Email: <Text code>obsyatharth@gmail.com</Text>
                    </Paragraph>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button 
                        type="primary" 
                        size="large"
                        icon={<WhatsAppIcon />}
                        href="https://wa.me/917983414419"
                        target="_blank"
                        style={{ 
                          height: '50px',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          minWidth: '200px'
                        }}
                      >
                        OBS WhatsApp Group
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingPage;
