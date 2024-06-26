import React from 'react';
import Layout from '../../components/Layout';

import './Home.scss';
import { BsArrowUp, BsArrowDown, BsChevronDown, BsChevronCompactUp, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SiApple } from "react-icons/si";
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";

const Home = () => {
	return <Layout className="home" >
		<section className='exchange-section' style={{ background: "url('/assets/images/home/home-first-section.png')", backgroundSize: 'cover' }} >
			<div className='container pb2 pt2'>
				<div className='row justify'>
					<div className='col-sm-12 col-md-12 col-lg-6 mt2'>
						<h1 className=''>
							Use Flash Transfer service to <span className='primary-color'>send</span>, <span className='primary-color'>buy</span> or <span className='primary-color'></span>sell your crypto for <span className='primary-color'>cash worldwide</span> in the world.
						</h1>
						<p className='gray-color'>
							Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners. You can also send your cryptocurrency vs fiat worldwide using a Binance account or using your no-custodial wallet ( Flash wallet, Metamask, Binance wallet, Trust wallet ...)
						</p>
						<div className='dis-f ai-c gap10 mt1'>
							<button className='btn black-bg white-color'>Get started</button>
							<button className='btn transparent-bg pb0 pt0'>
								<img className="" width='100%' height='40px' src='/assets/images/trustpilot.png' alt='' />
							</button>
						</div>
					</div>
					<div className='col-sm-12 col-md-12 col-lg-6 mt2'>
						<div className='exchange-container w9'>
							<div className='exchange-box tc'>
								<p className='black-color bold'>
									Connected Wallet
								</p>
								<div className='justify gap10'>
									<img src="/assets/images/tokens/bnb-b.png" width="30px" height="30px" alt="" />
									<h2 className=''>BINANCE</h2>
								</div>
							</div>

							<div className='exchange-box mt2 justify-s'>
								<div className=''>
									<div className='bold'>Amount Send</div>
									<div>
										<input className='transprent-bg border-n bold w10' style={{ fontSize: '16px' }} type="input" defaultValue={'100'} />
									</div>
								</div>
								<div className=''>
									<div className='pink-box'>
										<div className='justify gap10'>
											<img className='' width={'48px'} height={'48px'} src="/assets/images/tokens/busd.png" alt="" />
											<div>BUSD</div>
										</div>
										<div className='justify'>
											<BsChevronDown fontSize={'16px'} />
										</div>
									</div>
								</div>
							</div>

							<div className='mt2 mb2 dis-f ac-c jc-e gap20'>
								<div className="justify po-re">
									<BsArrowUp className='po-ab' style={{ left: '-7px' }} fontSize={'23px'} />
									<BsArrowDown className='po-ab' style={{ right: '-6px' }} fontSize={'23px'} />
								</div>
								<div className=''>
									1 <span style={{ color: '#F9AA4B' }}>BUSD</span> = 1 EUR
								</div>
							</div>

							<div className='exchange-box mt2 justify-s'>
								<div className='dis-f fd-c jc-sb h10'>
									<div className='bold'>Received Amount</div>
									<div>
										<input className='transprent-bg border-n bold w10' style={{ fontSize: '16px' }} type="input" defaultValue={'100'} />
									</div>
								</div>
								<div className=''>
									<div className='pink-box'>
										<div className='justify gap10'>
											<img className='' width={'48px'} height={'48px'} src="/assets/images/flags/france.png" alt="" />
											<div>Euro</div>
										</div>
										<div className='justify'>
											<BsChevronDown fontSize={'16px'} />
										</div>
									</div>
								</div>
							</div>

							<div className='mt2'>
								<div className='justify-s'>
									<div className='grey-color'>Fee</div>
									<div className=''>+2.50 EUR</div>
								</div>
							</div>
							<div className='mt2'>
								<div className='justify-s'>
									<div className='grey-color'>Transfer Time</div>
									<div className=''>1 Min</div>
								</div>
							</div>
							<div className='mt2' style={{ border: '1px solid #6A6A6A' }}></div>
							<div className='mt2'>
								<div className='justify-s'>
									<div className='purple-color'>Total to pay</div>
									<div className=''>102.50 BUSD</div>
								</div>
							</div>
							<div className='mt2'>
								<div className='justify-s'>
									<div className='purple-color'>Recipient Gets</div>
									<div className=''>100.00 EUR</div>
								</div>
							</div>
							<div className='mt2 justify'>
								<button className='btn black-bg white-color w10'>
									Continue
								</button>
							</div>
							<div className='mt2 justify'>
								<button className='btn transparent-bg w10 grey-border'>
									Cancel
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>;
};

export default Home;