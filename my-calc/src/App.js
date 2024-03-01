import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const NUMS = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
	const operations = ['+', '-', '=', 'C'];
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [display, setDisplay] = useState('0');
	const handleNumClick = (num) => {
		if (operator === '') {
			setOperand1(operand1 + num);
			setDisplay(operand1 + num);
		} else {
			setOperand2(operand2 + num);
			setDisplay(operand1 + operator + (operand2 + num));
		}
	};
	const handleOperationClick = (operation) => {
		if (operation === '+') {
			if (operator !== '') {
				setOperand1(getResult());
				setOperator(operation);
				setDisplay(getResult() + operation);
				setOperand2('');
			} else {
				setOperator(operation);
				setDisplay(operand1 + operation);
			}
		} else if (operation === '-') {
			if (operator !== '') {
				setOperand1(getResult());
				setOperator(operation);
				setDisplay(getResult() + operation);
				setOperand2('');
			} else {
				setOperator(operation);
				setDisplay(operand1 + operation);
			}
		} else if (operation === '=') {
			if (operand2 !== '') {
				setDisplay(getResult());
				setOperand1(getResult());
				setOperand2('');
				setOperator('');
			}
		} else if (operation === 'C') {
			setDisplay('0');
			setOperand1('');
			setOperand2('');
			setOperator('');
		}
	};
	const getResult = () => {
		switch (operator) {
			case '+':
				return parseInt(operand1) + parseInt(operand2);
			case '-':
				return parseInt(operand1) - parseInt(operand2);
			default:
				return '';
		}
	};

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<div className={styles.calcWindow}>
					<div className={styles.display}>
						<input
							type="text"
							value={display}
							className={styles.displayText}
						></input>
					</div>
					<div className={styles.buttonsBlock}>
						<div className={styles.numsButtons}>
							{NUMS.map((num) => (
								<button
									className={`${styles.numberBtn} ${num === '0' ? styles.buttonZero : ''}`}
									key={num}
									onClick={() => handleNumClick(num)}
								>
									{num}
								</button>
							))}
						</div>
						<div className={styles.operationsBtn}>
							{operations.map((operation) => (
								<button
									className={styles.operationBtn}
									key={operation}
									onClick={() => handleOperationClick(operation)}
								>
									{operation}
								</button>
							))}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};
