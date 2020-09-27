import React from 'react';
import { FaFire } from 'react-icons/fa';
import { Button } from '../utilities/Button';
import './Pricing.css';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="pricing__section">
            <div className="container">
                <div className="pricing_wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                        <Link to='/sing-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>$4.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>100 Transactions</li>
                                    <li>2% Cash back</li>
                                    <li>$1,000 Limit</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='/sing-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Gold</h3>
                                <h4>$9.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>1000 Transactions</li>
                                    <li>5% Cash back</li>
                                    <li>$2,000 Limit</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='/sing-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$19.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                    <li>5000 Transactions</li>
                                    <li>10% Cash back</li>
                                    <li>$5,000 Limit</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
                            </div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Pricing
