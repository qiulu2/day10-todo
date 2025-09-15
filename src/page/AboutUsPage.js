import {Link} from "react-router";
import {Card, Typography, Space, Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';

const {Title, Paragraph} = Typography;

export function AboutUsPage() {
    return (
        <div style={{padding: '20px'}}>
            <Space direction="vertical" size="middle" style={{width: '100%'}}>
                <Card>
                    <Title level={1}>📝 About Todo App</Title>
                    <Paragraph>Your simple todo list manager</Paragraph>
                </Card>

                <Card>
                    <Title level={2}>What is this app?</Title>
                    <Paragraph>
                        This is a simple Todo application built with React.
                        It helps you manage your daily tasks.
                    </Paragraph>
                </Card>

                <Card>
                    <Title level={2}>Features</Title>
                    <ul>
                        <li>Add new tasks</li>
                        <li>Mark tasks as completed</li>
                        <li>Edit tasks</li>
                        <li>Delete tasks</li>
                        <li>View completed tasks</li>
                    </ul>
                </Card>

                <Card>
                    <Title level={2}>Built with</Title>
                    <ul>
                        <li>React</li>
                        <li>Ant Design</li>
                        <li>React Router</li>
                    </ul>
                </Card>

                <Card>
                    <Button type="primary" icon={<ArrowLeftOutlined />}>
                        <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                            Back to TodoList
                        </Link>
                    </Button>
                </Card>
            </Space>
        </div>
    );
}
