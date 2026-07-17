 

const Items = () => {
    // 1. Define the user data variables
    const age = 20;
    const adharcard = true;
    const gmail = false;

    // 2. Determine eligibility based on your conditions
    // Let's check if they are an adult AND have an Aadhaar card OR a Gmail account.
    const canDrive = age >= 18 && (adharcard || gmail);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            {/* Conditional Rendering using a Ternary Operator */}
            {canDrive ? (
                <div>
                    <h1 style={{ color: 'green' }}>✓ You can drive!</h1>
                    <p>You meet the age and verification requirements.</p>
                </div>
            ) : (
                <div>
                    <h1 style={{ color: 'red' }}>✗ You can't drive.</h1>
                    <p>You must be at least 18 and have valid documentation.</p>
                </div>
            )}
        </div>
    )
}

export default Items