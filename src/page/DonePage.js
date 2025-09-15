import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import {Card, Typography, Empty, Statistic, Space} from 'antd';
import {CheckCircleOutlined, TrophyOutlined} from '@ant-design/icons';

const {Title, Paragraph} = Typography;

export function DonePage() {
    const {state} = useContext(TodoContext)
    const doneTodos = state.filter((todo) => todo.done === true)
    const totalTodos = state.length
    const completionRate = totalTodos > 0 ? Math.round((doneTodos.length / totalTodos) * 100) : 0

    return (
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <Space direction="vertical" size="large" style={{width: '100%'}}>
                <Card style={{textAlign: 'center', background: 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'}}>
                    <Title level={1} style={{color: 'white', margin: 0}}>
                        ✅ Completed Tasks
                    </Title>
                    <Paragraph style={{color: 'rgba(255,255,255,0.9)', fontSize: '16px', margin: '8px 0 0 0'}}>
                        Great job on your productivity!
                    </Paragraph>
                </Card>

                {totalTodos > 0 && (
                    <Card>
                        <Space size="large" style={{width: '100%', justifyContent: 'center'}}>
                            <Statistic
                                title="Completed Tasks"
                                value={doneTodos.length}
                                prefix={<CheckCircleOutlined style={{color: '#52c41a'}} />}
                                valueStyle={{color: '#52c41a'}}
                            />
                            <Statistic
                                title="Completion Rate"
                                value={completionRate}
                                suffix="%"
                                prefix={<TrophyOutlined style={{color: '#faad14'}} />}
                                valueStyle={{color: '#faad14'}}
                            />
                        </Space>
                    </Card>
                )}

                <Card>
                    {doneTodos.length > 0 ? (
                        <div>
                            <Title level={3} style={{marginBottom: '20px'}}>
                                {doneTodos.length} task{doneTodos.length > 1 ? 's' : ''} completed
                            </Title>
                            <div style={{padding: '8px 0'}}>
                                {doneTodos.map((item) => {
                                    return <TodoItem todo={item} key={item.id} showDetailBtn={false}/>;
                                })}
                            </div>
                        </div>
                    ) : (
                        <Empty
                            description="No completed tasks yet"
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            style={{padding: '40px 0'}}
                        >
                        </Empty>
                    )}
                </Card>
            </Space>
        </div>
    );
}
