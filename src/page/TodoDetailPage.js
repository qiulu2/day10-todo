import {useParams} from "react-router";
import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import {Button, Modal, Form, Input, message} from 'antd';
import {useTodoService} from "../useTodoService";

function EditTodo({todo}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const {dispatch} = useContext(TodoContext);
    const {updateTodo} = useTodoService();

    const showModal = () => {
        setIsModalVisible(true);
        form.setFieldsValue({
            text: todo.text
        });
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const updatedTodo = {
                ...todo,
                text: values.text
            };

            const response = await updateTodo(todo.id, updatedTodo);
            dispatch({
                type: "UPDATE_TODO",
                payload: response.data
            });

            message.success('Todo updated');
            setIsModalVisible(false);
        } catch (error) {
            message.error('Failed to update todo');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                ✍️
            </Button>
            <Modal
                title={"✍️"}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Save"
                cancelText="Cancel"
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="editTodoForm"
                >
                    <Form.Item
                        name="text"
                        rules={[
                            {
                                required: true,
                                message: 'Please input todo text',
                            },
                        ]}
                    >
                        <Input placeholder="Enter todo text" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export function TodoDetailPage() {

    const {id} = useParams()
    const {state} = useContext(TodoContext)
    console.log(state)
    const todo = state.filter((todo) => todo.id === id)
    if (todo.length === 0) {
        return <div>Not Found Todo.</div>
    }
    console.log(todo)
    return <>
        <div>
            <TodoItem todo={todo[0]} index={id} showDetailBtn={false}/>
            <EditTodo todo={todo[0]}/>
        </div>
    </>
}