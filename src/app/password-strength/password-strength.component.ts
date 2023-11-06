import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrengthColor: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength() {
    const password = this.password;
    if (password.length === 0) {
      this.passwordStrengthColor = ['gray', 'gray', 'gray'];
    } else if (password.length < 8) {
      this.passwordStrengthColor = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*]/.test(password);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.passwordStrengthColor = ['green', 'green', 'green'];
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        this.passwordStrengthColor = ['yellow', 'yellow', 'gray'];
      } else {
        this.passwordStrengthColor = ['red', 'gray', 'gray'];
      }
    }
  }
}
