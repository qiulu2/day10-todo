import {TodoGroup} from "../components/TodoGroup";
import {Card, Typography} from 'antd';

const {Title} = Typography;

export function TodoListPage() {
    return (
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <Card style={{marginBottom: '24px'}}>
                <Title level={1} style={{textAlign: 'center', margin: 0}}>
                    📝 Todo List
                </Title>
                <p style={{textAlign: 'center', color: '#666', marginTop: '8px'}}>
                    Organize your tasks
                </p>
            </Card>
            <TodoGroup/>
        </div>
    );
}
