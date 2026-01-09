const NewsLetter = () => {
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-2xl md:text-4xl text-gray-800 mb-8 font-semibold tracking-wide">
                    Sign Up to Our Newsletter
                </h2>
            </div>
            <div id="mc_embed_shell" className='flex justify-center'>
                <div id="mc_embed_signup" style={{
                    background: 'transparent',
                }}>
                    <form action="https://chowluckclub.us13.list-manage.com/subscribe/post?u=f3e41496ce33f06e3a27b23e7&amp;id=c48cf0bdd7&amp;f_id=0022dee2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <input type="email" name="EMAIL" className="p-[12px] border-b border-gray300 w-full mb-4 focus:outline-none" placeholder='Enter Email Address' id="mce-EMAIL"
                                    style={{
                                        background: 'transparent',
                                    }}
                                />
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                            </div>
                            <div aria-hidden="true" style={{
                                position: 'absolute',
                                left: '-5000px',
                            }}><input type="text" name="b_f3e41496ce33f06e3a27b23e7_c48cf0bdd7" tabIndex={-1} /></div>
                            <div className="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" className="font-medium py-2 px-5 text-lg rounded-xl overflow-hidden col-span-12 w-fit bg-[#FEAB01] text-colorWhite cursor-pointer" value="Subscribe" /></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter