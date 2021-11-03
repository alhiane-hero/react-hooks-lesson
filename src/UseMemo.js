import {useMemo, useState} from 'react';

// useMemo => WITH BIG DATA (search, filter, reverse, sort, ...);
// useMemo => تجنب إعادة إجراء عمليات الحساب المستهلكة للأداء عند كل تصيير;

const users = [
    {id:1, name: 'Alhiane'},
    {id:2, name: 'Aicha'},
    {id:3, name: 'AiMedo'},
    {id:4, name: 'Lahcen'},
    {id:5, name: 'Alhcen'}
]

export default function UseMemo() {

    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    const handleTetx = event => {
        console.log('handle text is running ...');
        setText(event.target.value);
    }   

    const handelSearch = _ => {
        console.log('handle search is running ...');
        setSearch(text);
    }   

    // const filteredUsers = users.filter(user => {
    //     console.log('filtered function!');
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // }); // when I inputing on text input filteredUsers() eorking users.length(5) times;

    const filteredUsersMemo = useMemo(_ => {
        return (
            users.filter(user => {
                console.log('filtered function!');
                return user.name.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [search]); // filteredUsersMemo will work when only search changed;
    // useMemo => (search) مححدد state لا تشتغل إلا عند تغيير;

    return (
        <div className='UseMemo'>
            <h3>Text Value: {text}</h3>
            <h3>Seacrh Value: {search}</h3>
            <input type='text' value={text} onChange={handleTetx} />
            <button onClick={handelSearch}>Filter Users</button>
            {/* <List items={filteredUsers} /> */}
            <List items={filteredUsersMemo} />
        </div>
    );
}

const List = ({items}) => {
    return (
        <ul>{
            items.map(item => {
                return <ListItem key={item.id} item={item} />
            })
        }</ul>
    );
}

const ListItem = ({item}) => {
    return <li>{item.name}</li>
}
