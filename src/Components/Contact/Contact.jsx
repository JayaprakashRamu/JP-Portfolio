import { Form, Input, Button, Row, Col, notification } from 'antd';
import emailjs from 'emailjs-com';
import '../Contact/Contact.css';
import location from '../../assets/logo/location.png'
import phone from '../../assets/logo/phone.png'
import email from '../../assets/logo/email.png'

function Contact() {
  // Form reference
  const [form] = Form.useForm();

  // Form submission logic
  const onFinish = (values) => {
    // console.log('Form values:', values);

    // Send email using EmailJS
    emailjs.send('service_307x6ap', 'template_3a80lrq', values, 'E-M3YSmA5X1jirsIX')
      .then((response) => {
        // console.log('Success!', response.status, response.text);

        // Show success notification using Ant Design's notification component
        notification.success({
          message: 'Success!',
          description: 'Thank you for getting in touch! We will respond soon.',
          placement: 'topRight',
        });

        // Reset form fields
        form.resetFields();
      })
      .catch((err) => {
        console.error('Failed to send email:', err);

        // Show error notification using Ant Design's notification component
        notification.error({
          message: 'Error!',
          description: 'There was an error with your submission. Please try again.',
          placement: 'topRight',
        });
      });
  };

  // Form submission failure (validation failure)
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);

    // Show error notification for form validation failure
    notification.error({
      message: 'Validation Failed',
      description: 'Please fill in all the required fields correctly.',
      placement: 'topRight',
    });
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <Row gutter={[24, 24]} justify="center" align="middle">
        {/* Contact Information Section */}
        <Col xs={24} sm={8} lg={6} className="contact-info">
          <Row gutter={[12, 12]} justify="start" align="middle">
            <Col span={24} className="contact-item">
              <img
                width="50"
                height="50"
                src={phone}
                alt="phone"
              />
              <div>
                <p>Phone</p>
                <p>9087081432</p>
              </div>
            </Col>
            <Col span={24} className="contact-item">
              <img
                width="50"
                height="50"
                color='white'
                src={email}
                alt="email"
              />
              <div>
                <p>Email</p>
                <p>jayaprakash2489@gmail.com</p>
              </div>
            </Col>
            <Col span={24} className="contact-item">
              <img
                width="50"
                height="50"
                src={location}
                alt="location"
              />
              <div>
                <p>Location</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Contact Form Section */}
        <Col xs={24} sm={16} lg={12}>
          <div className="contact-form-container">
            <h2 className="contact-form-container-head">Get in touch</h2>
            <Form
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              {/* Username Field */}
              <Form.Item
                label="Username"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              {/* Phone Number Field */}
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  { required: true, message: 'Please input your phone number!' },
                  { pattern: /^[0-9]+$/, message: 'Please input a valid phone number!' },
                ]}
              >
                <Input />
              </Form.Item>

              {/* Email Field */}
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please input a valid email!' },
                ]}
              >
                <Input />
              </Form.Item>

              {/* Subject Field */}
              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please input your subject!' }]}
              >
                <Input.TextArea rows={2} />
              </Form.Item>

              {/* Message Field */}
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <Input.TextArea rows={6} />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button className='contact-btn' htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
