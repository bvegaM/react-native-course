interface Address{
    country: string;
    houseNumber: string;
    street?: string;
}

interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Student extends Person {
    course: string;
}


export const ObjectLiterals = () => {

    const person: Person = {
        age: 26,
        firstName: 'Bryam',
        lastName: 'Vega',
        address: {
            country: 'Ecuador',
            houseNumber: '615',
            street: 'colombia y paraguay'
        }
    }
    
    const student: Student = {
        course: '7b',
        ...person
    }

    return (
        <>
            <h3> Objetos literales</h3>

            <pre>
                {JSON.stringify(student, null, 2)}
            </pre>
        </>
    )
}
