import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up Calculator object...");
        calculator = new Calculator();  
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        int result = calculator.add(4, 6);
        assertEquals(10, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 5);
        assertEquals(5, result);
    }
}
