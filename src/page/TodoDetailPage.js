import {useParams} from "react-router";
import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import {Modal, Form, Input, message, Card, Typography, Space} from 'antd';
import {EditOutlined, SaveOutlined} from '@ant-design/icons';
import {useTodoService} from "../useTodoService";

const {Title} = Typography;

export function TodoDetailPage() {
    const {id} = useParams()
    const {state} = useContext(TodoContext)
    const {updateTodo} = useTodoService();
    const {dispatch} = useContext(TodoContext);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const todo = state.filter((todo) => todo.id === id)

    if (todo.length === 0) {
        return (
            <Card style={{textAlign: 'center', margin: '50px auto', maxWidth: '400px'}}>
                <Title level={3}>Task Not Found</Title>
                <p>The task you're looking for doesn't exist.</p>
            </Card>
        )
    }

    const handleEdit = () => {
        setIsModalVisible(true);
        form.setFieldsValue({
            text: todo[0].text
        });
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const updatedTodo = {
                ...todo[0],
                text: values.text
            };

            const response = await updateTodo(todo[0].id, updatedTodo);
            dispatch({
                type: "UPDATE_TODO",
                payload: response.data
            });

            message.success('Task updated successfully!');
            setIsModalVisible(false);
        } catch (error) {
            message.error('Failed to update task');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <Space direction="vertical" size="large" style={{width: '100%'}}>
                <Card>
                    <Title level={2} style={{marginBottom: '20px'}}>
                        Task Details
                    </Title>
                    <TodoItem
                        todo={todo[0]}
                        showDetailBtn={false}
                        showEditBtn={true}
                        onEdit={handleEdit}
                    />
                </Card>
            </Space>

            <Modal
                title={
                    <Space>
                        <EditOutlined style={{color: '#1890ff'}} />
                        <span>Edit</span>
                    </Space>
                }
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={
                    <Space>
                        <SaveOutlined />
                        Save
                    </Space>
                }
                cancelText="Cancel"
                width={500}
                style={{top: 100}}
                okButtonProps={{
                    style: {
                        background: 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)',
                        border: 'none',
                        borderRadius: '6px'
                    }
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="editTodoForm"
                    style={{marginTop: '20px'}}
                >
                    <Form.Item
                            label="Task Description"
                        name="text"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter a task description',
                            },

                        ]}
                    >
                        <Input.TextArea
                            autoSize={{minRows: 3, maxRows: 6}}
                            style={{
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}