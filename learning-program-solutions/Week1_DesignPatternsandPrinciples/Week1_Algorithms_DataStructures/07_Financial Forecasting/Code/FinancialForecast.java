public class FinancialForecast{

    public static double predictFutureValue(double initialValue, double[] growthRates, int years) {
        if (years == 0) {
            return initialValue;
        }
        return predictFutureValue(initialValue, growthRates, years - 1) * (1 + growthRates[years - 1]);
    }

    public static void main(String[] args) {
        double initialValue = 1000.0;
        double[] growthRates = {0.05, 0.03, 0.04, 0.02}; 
        int years = 4;

        double futureValue = predictFutureValue(initialValue, growthRates, years);
        System.out.printf("Predicted Future Value after %d years: %.2f%n", years, futureValue);
    }
}
