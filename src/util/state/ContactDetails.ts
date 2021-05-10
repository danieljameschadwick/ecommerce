export class ContactDetails {
    firstName?: string;
    lastName?: string;
    email?: string;

    update(firstName?: string, lastName?: string, email?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    updateFromDTO({ firstName, lastName, email }: ContactDetails) {
        this.update(
            firstName,
            lastName,
            email
        );
    }
}
