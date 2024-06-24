import React from 'react'

export default function About() {
    return (
        <div className='container mt-4'>
            <h2 className='mb-4'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Our mission
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Our mission</strong> is to empower individuals and organizations by providing accurate, intuitive, and powerful text analysis tools. We aim to enhance your writing process, improve your content quality, and support your decision-making with actionable data insights.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What We Offer
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><strong>Sentiment Analysis:</strong> Understand the emotional tone of your text to better gauge audience reactions and improve communication strategies.</li>
                                <li><strong>Keyword Extraction:</strong> Identify the most important words and phrases in your text to optimize for search engines or focus on key themes.</li>
                                <li><strong>Grammar and Style Check:</strong> Enhance your writing by catching grammatical errors, stylistic issues, and suggesting improvements.</li>
                                <li><strong>Readability Scores:</strong> Assess the readability of your text to ensure it is suitable for your target audience.</li>
                                <li><strong>Plagiarism Detection:</strong> Ensure the originality of your content with advanced plagiarism checking.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Why Choose TextAnalyzer?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li><strong>User-Friendly Interface:</strong> Our intuitive design makes it easy for anyone to analyze their text quickly and efficiently.</li>
                                <li><strong>Accurate Results:</strong> Leveraging state-of-the-art NLP algorithms, we provide reliable and precise analysis to meet your needs.</li>
                                <li><strong>Security and Privacy:</strong>We prioritize your data privacy and security, ensuring your text is analyzed in a safe and confidential manner.</li>
                                <li><strong>Continuous Improvement:</strong>We are committed to continually enhancing our tools and features based on user feedback and the latest technological advancements.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h4 align='center'>Thank you for choosing TextAnalyzer. We look forward to helping you unlock the full potential of your text!</h4>
            </div>
        </div>
    )
}
