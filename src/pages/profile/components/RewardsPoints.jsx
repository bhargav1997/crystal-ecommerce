import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faGift,
   faTrophy,
   faHistory,
   faInfoCircle,
   faExclamationTriangle,
   faShoppingBag,
   faCreditCard,
   faBox,
   faTruck,
   faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileComponents.css";
import "./RewardsStyles.css";

const RewardsPoints = ({ user, isGuest }) => {
   const [activeTab, setActiveTab] = useState("overview");

   // Mock data for rewards
   const pointsHistory = [
      {
         id: 1,
         date: "2023-05-15",
         description: "Purchase: Order #ORD-12345",
         points: 130,
         type: "earned",
         icon: faShoppingBag,
         details: "You earned 130 points for your purchase of $130.00",
      },
      {
         id: 2,
         date: "2023-04-28",
         description: "Purchase: Order #ORD-12344",
         points: 75,
         type: "earned",
         icon: faShoppingBag,
         details: "You earned 75 points for your purchase of $75.00",
      },
      {
         id: 3,
         date: "2023-04-15",
         description: "Birthday Bonus",
         points: 100,
         type: "earned",
         icon: faGift,
         details: "Happy Birthday! You received 100 bonus points as our gift to you.",
      },
      {
         id: 4,
         date: "2023-03-20",
         description: "Redeemed for $5 discount",
         points: -100,
         type: "redeemed",
         icon: faCreditCard,
         details: "You redeemed 100 points for a $5 discount on order #ORD-12342",
      },
      {
         id: 5,
         date: "2023-03-15",
         description: "Purchase: Order #ORD-12343",
         points: 90,
         type: "earned",
         icon: faShoppingBag,
         details: "You earned 90 points for your purchase of $90.00",
      },
      {
         id: 6,
         date: "2023-02-10",
         description: "Referral Bonus: Sarah J.",
         points: 250,
         type: "earned",
         icon: faCheckCircle,
         details: "You earned 250 points because Sarah J. made their first purchase using your referral link.",
      },
   ];

   const availableRewards = [
      {
         id: 1,
         name: "$5 Off Your Next Purchase",
         pointsCost: 100,
         description: "Get $5 off your next order.",
         icon: faCreditCard,
         popular: false,
      },
      {
         id: 2,
         name: "$10 Off Your Next Purchase",
         pointsCost: 200,
         description: "Get $10 off your next order.",
         icon: faCreditCard,
         popular: true,
      },
      {
         id: 3,
         name: "Free Shipping",
         pointsCost: 150,
         description: "Free shipping on your next order, regardless of order value.",
         icon: faTruck,
         popular: true,
      },
      {
         id: 4,
         name: "Exclusive Crystal Guide eBook",
         pointsCost: 300,
         description: "Download our exclusive crystal guide eBook with detailed information on crystal properties and uses.",
         icon: faGift,
         popular: false,
      },
      {
         id: 5,
         name: "15% Off Your Next Purchase",
         pointsCost: 400,
         description: "Get 15% off your next order (max discount $50).",
         icon: faShoppingBag,
         popular: false,
      },
   ];

   const tierBenefits = {
      bronze: ["Earn 1 point per $1 spent", "Birthday bonus points", "Access to rewards redemption"],
      silver: [
         "Earn 1.25 points per $1 spent",
         "Birthday bonus points",
         "Access to rewards redemption",
         "Early access to sales",
         "Free shipping on orders over $50",
      ],
      gold: [
         "Earn 1.5 points per $1 spent",
         "Birthday bonus points",
         "Access to rewards redemption",
         "Early access to sales",
         "Free shipping on all orders",
         "Exclusive gold member promotions",
         "Priority customer service",
      ],
      platinum: [
         "Earn 2 points per $1 spent",
         "Birthday bonus points",
         "Access to rewards redemption",
         "Early access to sales",
         "Free shipping on all orders",
         "Exclusive platinum member promotions",
         "Priority customer service",
         "Annual free gift",
         "Personal shopping assistant",
      ],
   };

   const tierRequirements = {
      bronze: "Start at 0 points",
      silver: "1,000 points earned",
      gold: "2,500 points earned",
      platinum: "5,000 points earned",
   };

   const handleRedeemReward = (reward) => {
      if (user.rewardsPoints < reward.pointsCost) {
         alert(`You don't have enough points to redeem this reward. You need ${reward.pointsCost - user.rewardsPoints} more points.`);
         return;
      }

      if (window.confirm(`Are you sure you want to redeem ${reward.name} for ${reward.pointsCost} points?`)) {
         alert(`You have successfully redeemed ${reward.name}. Check your email for details.`);
      }
   };

   if (isGuest) {
      return (
         <div className='rewards-points'>
            <div className='profile-section'>
               <div className='profile-section-header'>
                  <h2>Rewards & Points</h2>
               </div>

               <div className='guest-restriction-message'>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <h3>Feature Not Available</h3>
                  <p>
                     The rewards program is only available for registered users. Create an account to start earning points with every
                     purchase!
                  </p>
                  <a href='/register' className='action-button'>
                     Create Account
                  </a>
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className='rewards-points'>
         <div className='profile-section'>
            <div className='profile-section-header'>
               <h2>Rewards & Points</h2>
            </div>

            <div className='rewards-summary-card'>
               <div className='rewards-summary-header'>
                  <div className='points-display'>
                     <div className='points-circle large'>
                        <div className='points-value'>{user.rewardsPoints}</div>
                        <div className='points-label'>Points</div>
                     </div>
                  </div>

                  <div className='tier-display'>
                     <div className='current-tier'>
                        <span className='tier-label'>Current Tier:</span>
                        <span className={`tier-badge ${user.tier.toLowerCase()}`}>{user.tier}</span>
                     </div>

                     <div className='points-value'>
                        <span className='value-label'>Points Value:</span>
                        <span className='value-amount'>${(user.rewardsPoints * 0.05).toFixed(2)}</span>
                     </div>

                     {user.tier !== "Platinum" && (
                        <div className='next-tier-progress'>
                           <div className='progress-label'>
                              Next Tier: {user.tier === "Bronze" ? "Silver" : user.tier === "Silver" ? "Gold" : "Platinum"}
                           </div>
                           <div className='progress-bar-container'>
                              <div
                                 className='progress-bar'
                                 style={{
                                    width: `${
                                       user.tier === "Bronze"
                                          ? (user.rewardsPoints / 1000) * 100
                                          : user.tier === "Silver"
                                          ? (user.rewardsPoints / 2500) * 100
                                          : (user.rewardsPoints / 5000) * 100
                                    }%`,
                                 }}></div>
                           </div>
                           <div className='progress-text'>
                              {user.tier === "Bronze"
                                 ? `${user.rewardsPoints}/1,000 points`
                                 : user.tier === "Silver"
                                 ? `${user.rewardsPoints}/2,500 points`
                                 : `${user.rewardsPoints}/5,000 points`}
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            <div className='rewards-tabs'>
               <button className={`tab-button ${activeTab === "overview" ? "active" : ""}`} onClick={() => setActiveTab("overview")}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>Overview</span>
               </button>

               <button className={`tab-button ${activeTab === "history" ? "active" : ""}`} onClick={() => setActiveTab("history")}>
                  <FontAwesomeIcon icon={faHistory} />
                  <span>Points History</span>
               </button>

               <button className={`tab-button ${activeTab === "redeem" ? "active" : ""}`} onClick={() => setActiveTab("redeem")}>
                  <FontAwesomeIcon icon={faGift} />
                  <span>Redeem Rewards</span>
               </button>

               <button className={`tab-button ${activeTab === "tiers" ? "active" : ""}`} onClick={() => setActiveTab("tiers")}>
                  <FontAwesomeIcon icon={faTrophy} />
                  <span>Membership Tiers</span>
               </button>
            </div>

            <div className='rewards-tab-content'>
               {activeTab === "overview" && (
                  <div className='rewards-overview'>
                     <div className='rewards-info-card'>
                        <h3>How It Works</h3>
                        <p>
                           Our rewards program is designed to thank you for your loyalty. Earn points with every purchase and redeem them
                           for exclusive rewards and discounts.
                        </p>

                        <h4>Earning Points</h4>
                        <ul>
                           <li>Earn points with every purchase (rate depends on your tier)</li>
                           <li>Get bonus points on your birthday</li>
                           <li>Earn points by referring friends</li>
                           <li>Special promotions and events</li>
                        </ul>

                        <h4>Redeeming Points</h4>
                        <p>
                           Redeem your points for discounts, free shipping, exclusive products, and more. Visit the "Redeem Rewards" tab to
                           see available rewards.
                        </p>

                        <h4>Your Current Benefits</h4>
                        <ul>
                           {tierBenefits[user.tier.toLowerCase()].map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               )}

               {activeTab === "history" && (
                  <div className='points-history'>
                     <div className='points-summary'>
                        <div className='summary-box'>
                           <div className='summary-value'>
                              {pointsHistory.filter((item) => item.type === "earned").reduce((sum, item) => sum + item.points, 0)}
                           </div>
                           <div className='summary-label'>Total Points Earned</div>
                        </div>

                        <div className='summary-box'>
                           <div className='summary-value'>
                              {Math.abs(
                                 pointsHistory.filter((item) => item.type === "redeemed").reduce((sum, item) => sum + item.points, 0),
                              )}
                           </div>
                           <div className='summary-label'>Total Points Redeemed</div>
                        </div>

                        <div className='summary-box'>
                           <div className='summary-value'>{user.rewardsPoints}</div>
                           <div className='summary-label'>Current Balance</div>
                        </div>
                     </div>

                     <div className='points-timeline'>
                        <h3>Points Activity</h3>
                        <div className='timeline-container'>
                           {pointsHistory.map((item) => (
                              <div className='timeline-item' key={item.id}>
                                 <div className='timeline-icon'>
                                    <FontAwesomeIcon icon={item.icon} />
                                 </div>
                                 <div className='timeline-content'>
                                    <div className='timeline-date'>
                                       {new Date(item.date).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                       })}
                                    </div>
                                    <div className='timeline-header'>
                                       <div className='timeline-title'>{item.description}</div>
                                       <div className={`timeline-points ${item.type}`}>
                                          {item.type === "earned" ? "+" : ""}
                                          {item.points} points
                                       </div>
                                    </div>
                                    <div className='timeline-details'>{item.details}</div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               )}

               {activeTab === "redeem" && (
                  <div className='redeem-rewards'>
                     <div className='rewards-grid'>
                        {availableRewards.map((reward) => (
                           <div className={`reward-card ${reward.popular ? "popular" : ""}`} key={reward.id}>
                              {reward.popular && <div className='popular-tag'>Popular</div>}
                              <div className='reward-header'>
                                 <div className='reward-icon'>
                                    <FontAwesomeIcon icon={reward.icon} />
                                 </div>
                                 <h3>{reward.name}</h3>
                                 <div className='reward-cost'>
                                    <span className='points-value'>{reward.pointsCost}</span>
                                    <span className='points-label'>points</span>
                                 </div>
                              </div>

                              <div className='reward-description'>{reward.description}</div>

                              <div className='reward-footer'>
                                 {user.rewardsPoints >= reward.pointsCost ? (
                                    <div className='points-status available'>
                                       <FontAwesomeIcon icon={faCheckCircle} />
                                       <span>You have enough points</span>
                                    </div>
                                 ) : (
                                    <div className='points-status needed'>
                                       <span>You need {reward.pointsCost - user.rewardsPoints} more points</span>
                                    </div>
                                 )}

                                 <button
                                    className={`redeem-button ${user.rewardsPoints < reward.pointsCost ? "disabled" : ""}`}
                                    onClick={() => handleRedeemReward(reward)}
                                    disabled={user.rewardsPoints < reward.pointsCost}>
                                    {user.rewardsPoints < reward.pointsCost ? "Not Available Yet" : "Redeem Now"}
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               )}

               {activeTab === "tiers" && (
                  <div className='membership-tiers'>
                     <div className='tiers-grid'>
                        <div className={`tier-card ${user.tier === "Bronze" ? "current" : ""}`}>
                           <div className='tier-header bronze'>
                              <h3>Bronze</h3>
                              {user.tier === "Bronze" && <div className='current-tier-badge'>Current</div>}
                           </div>

                           <div className='tier-requirement'>{tierRequirements.bronze}</div>

                           <div className='tier-benefits'>
                              <h4>Benefits</h4>
                              <ul>
                                 {tierBenefits.bronze.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className={`tier-card ${user.tier === "Silver" ? "current" : ""}`}>
                           <div className='tier-header silver'>
                              <h3>Silver</h3>
                              {user.tier === "Silver" && <div className='current-tier-badge'>Current</div>}
                           </div>

                           <div className='tier-requirement'>{tierRequirements.silver}</div>

                           <div className='tier-benefits'>
                              <h4>Benefits</h4>
                              <ul>
                                 {tierBenefits.silver.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className={`tier-card ${user.tier === "Gold" ? "current" : ""}`}>
                           <div className='tier-header gold'>
                              <h3>Gold</h3>
                              {user.tier === "Gold" && <div className='current-tier-badge'>Current</div>}
                           </div>

                           <div className='tier-requirement'>{tierRequirements.gold}</div>

                           <div className='tier-benefits'>
                              <h4>Benefits</h4>
                              <ul>
                                 {tierBenefits.gold.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                        <div className={`tier-card ${user.tier === "Platinum" ? "current" : ""}`}>
                           <div className='tier-header platinum'>
                              <h3>Platinum</h3>
                              {user.tier === "Platinum" && <div className='current-tier-badge'>Current</div>}
                           </div>

                           <div className='tier-requirement'>{tierRequirements.platinum}</div>

                           <div className='tier-benefits'>
                              <h4>Benefits</h4>
                              <ul>
                                 {tierBenefits.platinum.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default RewardsPoints;
