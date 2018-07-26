export default () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(obj => obj.results)
        .then(data => data.map(
            (person, id) => (
                {
                    name: person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1) + ' ' + person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1),
                    age: person.dob.age,
                    phone: person.phone,
                    avatar: person.picture.thumbnail,
                    avatarLarge: person.picture.large,
                    id: id
                }
            )))
        .then(user => {
            this.initialData = user;
            this.setState({
                loaded: true,
                loading: false,
                user: this.initialData,
                activeUser: user[0]
            })
        })
}