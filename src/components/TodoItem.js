import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {Card, Button, Space, Typography} from 'antd';
import {DeleteOutlined, EyeOutlined, CheckCircleOutlined, ClockCircleOutlined, EditOutlined} from '@ant-design/icons';

const {Text} = Typography;

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext);
    const navigate = useNavigate();
    const {showDetailBtn = true, showEditBtn = false, onEdit} = props;
    const {updateDone, deleteTodo} = useTodoService()

    function handleUpdateTodo() {
        updateDone(props)
            .then(res => res.data)
            .then(todo => dispatch({
                type: "UPDATE_TODO",
                payload: todo,
            }));
    }

    function handlerDeleteTodo() {
        deleteTodo(props)
            .then(res => res.data)
            .then(todo => dispatch({type: "DELETE_TODO", payload: todo}));
    }

    function handleDetailTodo() {
        navigate(`/todos/${props.todo.id}`)
    }

    return (
        <Card
            hoverable
            style={{
                marginBottom: '16px',
                borderRadius: '12px',
                boxShadow: props.todo.done ? '0 1px 3px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.15)',
                border: props.todo.done ? '1px solid #f0f0f0' : '1px solid #e6f4ff',
                backgroundColor: props.todo.done ? '#f9f9f9' : '#ffffff',
                transition: 'all 0.3s ease',
                minHeight: '80px'
            }}
            bodyStyle={{padding: '20px 24px'}}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '16px'
            }}>
                <Button
                    type="text"
                    icon={props.todo.done ?
                        <CheckCircleOutlined style={{color: '#52c41a', fontSize: '20px'}} /> :
                        <ClockCircleOutlined style={{color: '#faad14', fontSize: '20px'}} />
                    }
                    onClick={handleUpdateTodo}
                    style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: props.todo.done ? '#f6ffed' : '#fff7e6',
                        border: props.todo.done ? '1px solid #b7eb8f' : '1px solid #ffd666'
                    }}
                    size="large"
                />
                <Text
                    delete={props.todo.done}
                    style={{
                        flex: 1,
                        color: props.todo.done ? '#999' : '#262626',
                        cursor: 'pointer',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        wordBreak: 'break-word',
                        minWidth: 0,
                        fontWeight: props.todo.done ? 'normal' : '500'
                    }}
                    onClick={handleUpdateTodo}
                >
                    {props.todo.text}
                </Text>
                <Space size="small" style={{flexShrink: 0}}>
                    {showEditBtn && onEdit && (
                        <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={onEdit}
                            size="middle"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                backgroundColor: '#fff7e6',
                                border: '1px solid #ffd666',
                                color: '#fa8c16'
                            }}
                        />
                    )}
                    {showDetailBtn && (
                        <Button
                            type="text"
                            icon={<EyeOutlined />}
                            onClick={handleDetailTodo}
                            size="middle"
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '8px',
                                backgroundColor: '#f0f5ff',
                                border: '1px solid #d6e4ff',
                                color: '#1890ff'
                            }}
                        />
                    )}
                    <Button
                        type="text"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={handlerDeleteTodo}
                        size="middle"
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '8px',
                            backgroundColor: '#fff2f0',
                            border: '1px solid #ffccc7',
                            color: '#ff4d4f'
                        }}
                    />
                </Space>
            </div>
        </Card>
    );
}
